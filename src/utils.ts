/**
 * Utility functions for the pkgx-tools project
 */
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const GITHUB_RATE_LIMIT_FILE = path.join(process.cwd(), 'github-rate-limit.json')
const GITHUB_CACHE_FILE = path.join(process.cwd(), 'github-cache.json')
const MIN_REMAINING_CALLS = 10 // Preserve at least this many GitHub API calls
const CACHE_DURATION_MS = 60 * 60 * 1000 // 1 hour cache expiration

/**
 * Saves GitHub API rate limit information to a file
 * @param headers Response headers from a GitHub API request
 */
export function saveRateLimitInfo(headers: Headers): void {
  try {
    const rateLimitRemaining = headers.get('X-RateLimit-Remaining')
    const rateLimitReset = headers.get('X-RateLimit-Reset')
    const rateLimitLimit = headers.get('X-RateLimit-Limit')

    if (rateLimitRemaining && rateLimitReset && rateLimitLimit) {
      const resetTime = new Date(Number(rateLimitReset) * 1000)
      const info = {
        remaining: Number(rateLimitRemaining),
        limit: Number(rateLimitLimit),
        resetTime: resetTime.toISOString(),
        resetTimestamp: Number(rateLimitReset) * 1000,
        lastUpdated: new Date().toISOString(),
      }

      fs.writeFileSync(GITHUB_RATE_LIMIT_FILE, JSON.stringify(info, null, 2))
      console.error(`GitHub API rate limit info saved to ${GITHUB_RATE_LIMIT_FILE}`)
      console.error(`Rate limit: ${rateLimitRemaining}/${rateLimitLimit} remaining, resets at ${resetTime.toLocaleString()}`)
    }
  }
  catch (error) {
    console.error('Failed to save GitHub rate limit info:', error)
  }
}

/**
 * Checks if we should proceed with a GitHub API request based on rate limit
 * and adds delays when necessary to avoid hitting limits
 * @returns boolean indicating if the request should proceed
 */
export function shouldProceedWithGitHubRequest(): boolean {
  try {
    if (!fs.existsSync(GITHUB_RATE_LIMIT_FILE)) {
      // No rate limit info yet, proceed cautiously
      return true
    }

    const rateLimitInfo = JSON.parse(fs.readFileSync(GITHUB_RATE_LIMIT_FILE, 'utf8'))
    const now = Date.now()

    // If reset time has passed, we can proceed
    if (now >= rateLimitInfo.resetTimestamp) {
      return true
    }

    // Check if we have enough calls remaining
    if (rateLimitInfo.remaining <= MIN_REMAINING_CALLS) {
      const resetTime = new Date(rateLimitInfo.resetTimestamp)
      console.error(`GitHub API rate limit almost exhausted (${rateLimitInfo.remaining}/${rateLimitInfo.limit} remaining). Preserving remaining calls until reset at ${resetTime.toLocaleString()}`)

      // Get wait time in seconds
      const waitTimeMs = rateLimitInfo.resetTimestamp - now

      // If wait time is reasonable (less than 5 minutes), add a delay
      if (waitTimeMs < 5 * 60 * 1000) {
        console.error(`Waiting ${Math.round(waitTimeMs / 1000)} seconds for rate limit to reset...`)
        // We don't actually wait here, but we'll use cached data instead
      }

      return false
    }

    return true
  }
  catch (error) {
    console.error('Error checking GitHub rate limit:', error)
    // Proceed cautiously in case of error
    return true
  }
}

/**
 * Gets cached GitHub package list if it exists and is still valid
 * @returns Array of package paths from cache, or null if cache invalid
 */
export function getGitHubPackageCache(): string[] | null {
  try {
    if (!fs.existsSync(GITHUB_CACHE_FILE)) {
      return null
    }

    const cacheData = JSON.parse(fs.readFileSync(GITHUB_CACHE_FILE, 'utf8'))
    const now = Date.now()

    // Check if cache is still valid (1 hour)
    if (cacheData.timestamp && (now - cacheData.timestamp < CACHE_DURATION_MS)) {
      const expiresAt = new Date(cacheData.timestamp + CACHE_DURATION_MS)

      console.error(`Using GitHub API cache from ${new Date(cacheData.timestamp).toLocaleString()}, expires at ${expiresAt.toLocaleString()}`)

      // Check if we have the packages array in the expected format
      if (Array.isArray(cacheData.packages)) {
        console.error(`Using ${cacheData.packages.length} packages from GitHub API cache`)
        return cacheData.packages
      }
      else if (Array.isArray(cacheData.data)) {
        // Support for older cache format
        console.error(`Using ${cacheData.data.length} packages from GitHub API cache (old format)`)
        return cacheData.data
      }
      else {
        console.error('GitHub API cache has invalid format, fetching fresh data')
        return null
      }
    }

    console.error(`GitHub API cache expired (older than ${CACHE_DURATION_MS / 1000 / 60} minutes), fetching fresh data`)
    return null
  }
  catch (error) {
    console.error('Error reading GitHub cache:', error)
    return null
  }
}

/**
 * Saves GitHub package list to cache
 * @param packages Array of package paths to cache
 */
export function saveGitHubPackageCache(packages: string[]): void {
  try {
    const cacheData = {
      timestamp: Date.now(),
      packages,
    }

    fs.writeFileSync(GITHUB_CACHE_FILE, JSON.stringify(cacheData, null, 2))
    console.error(`GitHub API package list cached to ${GITHUB_CACHE_FILE} (${packages.length} packages)`)
  }
  catch (error) {
    console.error('Error saving GitHub cache:', error)
  }
}

/**
 * Fetches a list of packages from GitHub API using nested directory approach
 * @param limit Maximum number of packages to return (0 for all)
 * @returns Array of package paths
 */
export async function fetchPackageListFromGitHub(limit: number = 0): Promise<string[]> {
  console.error('Fetching package list from GitHub API...')

  // Check cache first
  const cachedPackages = getGitHubPackageCache()
  if (cachedPackages) {
    return limit > 0 ? cachedPackages.slice(0, limit) : cachedPackages
  }

  try {
    if (!shouldProceedWithGitHubRequest()) {
      throw new Error('GitHub API rate limit preventing request - please try again later')
    }

    // Fetch base projects
    const response = await fetch('https://api.github.com/repos/pkgxdev/pantry/contents/projects', {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'pkgx-tools',
      },
    })

    // Save rate limit info
    saveRateLimitInfo(response.headers)

    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}: ${response.statusText}`)
    }

    const baseProjects = await response.json() as { name: string, type: string }[]
    const baseProjectNames = baseProjects
      .filter(item => item.type === 'dir')
      .map(item => item.name)

    console.error(`Found ${baseProjectNames.length} base projects on GitHub`)

    // Project paths to return
    const projectPaths: string[] = [...baseProjectNames]

    // Known projects with nested paths to look for
    const projectsWithNestedPaths = [
      'agwa.name',
      'acorn.io',
      'apache.org',
      'aquasecurity.github.io',
      'aws.amazon.com',
    ]

    // Additional known nested projects to add without API calls
    const knownNestedProjects = [
      'alsa-project.org/alsa-lib',
      'apple.com/remote_cmds',
      'android.com/cmdline-tools',
      'anchore.com/syft',
      'argoproj.github.io/cd',
      'argoproj.github.io/workflows',
      'amrdeveloper.github.io/GQL',
      'authzed.com/spicedb',
      'arduino.github.io/arduino-cli',
      'aomedia.googlesource.com/aom',
      'akuity.io/kargo',
      'asciinema.org/agg',
      'ansible.com/ansible-lint',
      'astral.sh/ruff',
      'astral.sh/uv',
      'apollographql.com/rover',
      'brxken128.github.io/dexios',
      'cedarpolicy.com/cli',
      'blake2.net/libb2',
    ]

    // Fetch nested projects - only check a few common ones to save API calls
    for (const project of projectsWithNestedPaths) {
      // Skip if rate limit is low
      if (!shouldProceedWithGitHubRequest()) {
        console.error(`Skipping nested path check for ${project} due to rate limit concerns`)
        continue
      }

      try {
        console.error(`Checking for nested projects in ${project}...`)

        const nestedResponse = await fetch(`https://api.github.com/repos/pkgxdev/pantry/contents/projects/${project}`, {
          headers: {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'pkgx-tools',
          },
        })

        // Save rate limit info
        saveRateLimitInfo(nestedResponse.headers)

        if (!nestedResponse.ok) {
          console.error(`Failed to fetch nested projects for ${project}: ${nestedResponse.status}`)
          continue
        }

        const nestedProjects = await nestedResponse.json() as { name: string, type: string }[]
        const nestedPaths = nestedProjects
          .filter(item => item.type === 'dir')
          .map(item => `${project}/${item.name}`)

        console.error(`Found ${nestedPaths.length} nested projects for ${project}: ${nestedPaths.join(', ')}`)

        projectPaths.push(...nestedPaths)
      }
      catch (error) {
        console.error(`Error fetching nested projects for ${project}:`, error)
      }
    }

    // Add known nested projects without making API calls
    for (const nestedProject of knownNestedProjects) {
      if (!projectPaths.includes(nestedProject)) {
        console.error(`Adding known nested project: ${nestedProject}`)
        projectPaths.push(nestedProject)
      }
    }

    // Cache the results for future use
    saveGitHubPackageCache(projectPaths)

    // Apply limit if specified
    const finalProjects = limit > 0 ? projectPaths.slice(0, limit) : projectPaths

    console.error(`Total of ${projectPaths.length} projects found (including nested paths)`)

    return finalProjects
  }
  catch (error) {
    console.error('Error fetching package list from GitHub:', error)
    return []
  }
}
