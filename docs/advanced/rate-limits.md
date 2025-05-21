# Working with GitHub API Rate Limits

ts-pkgx uses the GitHub API to fetch package information. This page covers advanced techniques for handling GitHub API rate limits effectively.

## Understanding GitHub API Rate Limits

GitHub imposes rate limits on API requests:
- Unauthenticated requests: 60 requests per hour
- Authenticated requests: 5,000 requests per hour

When you're fetching information for many packages, it's important to manage these limits carefully to avoid hitting the cap.

## Smart Caching

ts-pkgx implements caching for GitHub API responses to avoid hitting rate limits:

```typescript
import fs from 'node:fs'
import path from 'node:path'

interface GitHubCache {
  timestamp: number
  expiresAt: number
  data: any
}

// Save GitHub API response to cache
function saveGitHubCache(data: any, cacheDuration: number, cacheFile: string): void {
  try {
    const cacheData: GitHubCache = {
      timestamp: Date.now(),
      expiresAt: Date.now() + cacheDuration,
      data,
    }
    fs.writeFileSync(cacheFile, JSON.stringify(cacheData, null, 2))
    console.log(`GitHub API cache saved to ${cacheFile}, expires at ${new Date(cacheData.expiresAt).toLocaleString()}`)
  }
  catch (error) {
    console.error('Failed to save GitHub cache:', error)
  }
}

// Load GitHub API response from cache if valid
function loadGitHubCache(cacheDuration: number, cacheFile: string): any | null {
  try {
    if (!fs.existsSync(cacheFile)) {
      return null
    }

    const cacheData: GitHubCache = JSON.parse(fs.readFileSync(cacheFile, 'utf8'))
    const now = Date.now()

    // Check if cache is still valid
    if (now - cacheData.timestamp <= cacheDuration) {
      console.log(`Using GitHub API cache from ${new Date(cacheData.timestamp).toLocaleString()}, expires at ${new Date(cacheData.expiresAt).toLocaleString()}`)
      return cacheData.data
    }
    else {
      console.log(`GitHub API cache expired (from ${new Date(cacheData.timestamp).toLocaleString()})`)
      return null
    }
  }
  catch (error) {
    console.error('Error loading GitHub cache:', error)
    return null
  }
}
```

## Authentication with GitHub Token

Using a GitHub token significantly increases your rate limit:

```typescript
import fetch from 'node-fetch'

async function fetchFromGitHub(url: string, token?: string): Promise<any> {
  const headers: Record<string, string> = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'ts-pkgx'
  }

  // Add authentication if token is provided
  if (token) {
    headers.Authorization = `token ${token}`
  }

  const response = await fetch(url, { headers })

  // Check for rate limit headers
  const rateLimitRemaining = response.headers.get('x-ratelimit-remaining')
  const rateLimitReset = response.headers.get('x-ratelimit-reset')

  if (rateLimitRemaining) {
    console.log(`GitHub API rate limit remaining: ${rateLimitRemaining}`)
  }

  if (Number.parseInt(rateLimitRemaining || '1') < 5) {
    console.warn(`GitHub API rate limit almost reached! Resets at ${new Date(Number.parseInt(rateLimitReset || '0') * 1000).toLocaleString()}`)
  }

  // Handle rate limiting
  if (response.status === 403 && response.headers.get('x-ratelimit-remaining') === '0') {
    const resetTime = Number.parseInt(rateLimitReset || '0') * 1000
    const waitTime = resetTime - Date.now()

    if (waitTime > 0) {
      console.warn(`GitHub API rate limit exceeded! Waiting until ${new Date(resetTime).toLocaleString()} (${Math.ceil(waitTime / 1000)} seconds)`)
      await new Promise(resolve => setTimeout(resolve, waitTime))
      return fetchFromGitHub(url, token) // Retry after waiting
    }
  }

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status} ${response.statusText}`)
  }

  return response.json()
}
```

## Environment Variable Configuration

Configure the GitHub token via environment variables:

```typescript
function getGitHubToken(): string | undefined {
  // Check environment variables
  return process.env.GITHUB_TOKEN || process.env.GH_TOKEN
}

async function fetchPackageList(): Promise<string[]> {
  const token = getGitHubToken()
  const apiUrl = 'https://api.github.com/repos/pkgxdev/pantry/contents/projects'

  if (token) {
    console.log('Using authenticated GitHub API requests (higher rate limit)')
  }
  else {
    console.log('Using unauthenticated GitHub API requests (lower rate limit)')
  }

  return fetchFromGitHub(apiUrl, token)
}
```

## Rate Limit Monitoring

Monitor and track your rate limit usage:

```typescript
interface RateLimitInfo {
  limit: number
  remaining: number
  resetTime: Date
  tokenPrefix?: string
}

async function checkRateLimitStatus(token?: string): Promise<RateLimitInfo> {
  const headers: Record<string, string> = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'ts-pkgx'
  }

  if (token) {
    headers.Authorization = `token ${token}`
  }

  const response = await fetch('https://api.github.com/rate_limit', { headers })

  if (!response.ok) {
    throw new Error(`Failed to check rate limit: ${response.status} ${response.statusText}`)
  }

  const data = await response.json()

  return {
    limit: data.rate.limit,
    remaining: data.rate.remaining,
    resetTime: new Date(data.rate.reset * 1000),
    tokenPrefix: token ? `${token.substring(0, 4)}...` : undefined
  }
}

// Usage
async function monitorRateLimit(): Promise<void> {
  try {
    const token = getGitHubToken()
    const status = await checkRateLimitStatus(token)

    console.log(`GitHub API rate limit status:`)
    console.log(`- Limit: ${status.limit} requests`)
    console.log(`- Remaining: ${status.remaining} requests`)
    console.log(`- Resets at: ${status.resetTime.toLocaleString()}`)

    // Save to a log file for tracking
    fs.appendFileSync('github-rate-limit.log', `${new Date().toISOString()},${status.limit},${status.remaining},${status.resetTime.toISOString()}\n`)

    // Create a JSON file for the current status
    fs.writeFileSync('github-rate-limit.json', JSON.stringify({
      checkedAt: new Date().toISOString(),
      ...status
    }, null, 2))
  }
  catch (error) {
    console.error('Error checking rate limit:', error)
  }
}
```

## Adaptive Request Timing

Implement adaptive timing based on rate limit status:

```typescript
async function fetchWithAdaptiveTiming<T>(
  fetcher: () => Promise<T>,
  token?: string
): Promise<T> {
  // Check current rate limit status
  const status = await checkRateLimitStatus(token)

  // If we're getting low on requests, slow down
  if (status.remaining < status.limit * 0.2) {
    const timeUntilReset = status.resetTime.getTime() - Date.now()
    const delayBetweenRequests = timeUntilReset / (status.remaining + 1)

    console.warn(`Rate limit low (${status.remaining}/${status.limit}). Adding delay of ${Math.ceil(delayBetweenRequests)}ms between requests.`)

    // Wait a bit before proceeding
    await new Promise(resolve => setTimeout(resolve, delayBetweenRequests))
  }

  // Perform the actual fetch
  return fetcher()
}

// Usage
const packageList = await fetchWithAdaptiveTiming(
  () => fetchFromGitHub('https://api.github.com/repos/pkgxdev/pantry/contents/projects', token),
  token
)
```

## Fallback Strategies

Implement fallback strategies when rate limits are hit:

```typescript
async function fetchPackageListWithFallbacks(): Promise<string[]> {
  try {
    // First try: GitHub API with authentication
    const token = getGitHubToken()
    if (token) {
      try {
        console.log('Attempting to fetch package list via GitHub API with authentication')
        return await fetchFromGitHub('https://api.github.com/repos/pkgxdev/pantry/contents/projects', token)
      }
      catch (error) {
        console.warn('Error with authenticated GitHub API request:', error.message)
        // Fall through to next strategy
      }
    }

    // Second try: GitHub API without authentication
    try {
      console.log('Attempting to fetch package list via GitHub API without authentication')
      return await fetchFromGitHub('https://api.github.com/repos/pkgxdev/pantry/contents/projects')
    }
    catch (error) {
      console.warn('Error with unauthenticated GitHub API request:', error.message)
      // Fall through to next strategy
    }

    // Third try: Use web scraping as fallback
    console.log('Falling back to web scraping for package list')
    return await fetchAllPackagePathsByWebScraping(30000)
  }
  catch (error) {
    console.error('All package list fetch strategies failed:', error)
    throw error
  }
}
```

## Shared Rate Limit Pool

Manage a pool of GitHub tokens to increase total rate limits:

```typescript
class GitHubTokenPool {
  private tokens: Array<{
    token: string
    rateLimit: {
      limit: number
      remaining: number
      resetTime: Date
    }
  }> = []

  constructor(tokens: string[]) {
    // Initialize with token strings
    this.tokens = tokens.map(token => ({
      token,
      rateLimit: {
        limit: 5000,
        remaining: 5000,
        resetTime: new Date(Date.now() + 3600000) // Assume 1 hour from now initially
      }
    }))
  }

  async getBestToken(): Promise<string | undefined> {
    // Update rate limit info for all tokens
    await this.updateRateLimits()

    // Find token with most remaining requests
    const bestToken = this.tokens
      .filter(t => t.rateLimit.remaining > 0)
      .sort((a, b) => b.rateLimit.remaining - a.rateLimit.remaining)[0]

    return bestToken?.token
  }

  private async updateRateLimits(): Promise<void> {
    await Promise.all(this.tokens.map(async (entry) => {
      try {
        const status = await checkRateLimitStatus(entry.token)
        entry.rateLimit = {
          limit: status.limit,
          remaining: status.remaining,
          resetTime: status.resetTime
        }
      }
      catch (error) {
        console.error(`Error checking rate limit for token ${entry.token.substring(0, 4)}...`, error)
      }
    }))
  }

  getRateLimitSummary(): Record<string, any> {
    return {
      tokens: this.tokens.length,
      totalRemaining: this.tokens.reduce((sum, t) => sum + t.rateLimit.remaining, 0),
      totalLimit: this.tokens.reduce((sum, t) => sum + t.rateLimit.limit, 0),
      nextReset: this.tokens.length > 0
        ? new Date(Math.min(...this.tokens.map(t => t.rateLimit.resetTime.getTime())))
        : new Date()
    }
  }
}

// Usage
const tokenPool = new GitHubTokenPool([
  process.env.GITHUB_TOKEN_1,
  process.env.GITHUB_TOKEN_2,
  process.env.GITHUB_TOKEN_3
].filter(Boolean) as string[])

// Get the best token for the next request
const token = await tokenPool.getBestToken()
```

These techniques will help you effectively manage GitHub API rate limits when working with ts-pkgx, especially when fetching large numbers of packages.
