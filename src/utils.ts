/**
 * Utility functions for the pkgx-tools project
 */
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

// Path to store GitHub API rate limit information
const RATE_LIMIT_FILE = path.join(process.cwd(), 'github-rate-limit.json')

/**
 * Saves GitHub API rate limit information to a file
 */
export function saveRateLimitInfo(headers: Headers): void {
  try {
    const now = new Date()
    const rateLimitInfo = {
      limit: headers.get('X-RateLimit-Limit'),
      remaining: headers.get('X-RateLimit-Remaining'),
      reset: headers.get('X-RateLimit-Reset'),
      used: headers.get('X-RateLimit-Used'),
      resource: headers.get('X-RateLimit-Resource'),
      timestamp: now.toISOString(),
      humanReadableReset: headers.get('X-RateLimit-Reset')
        ? new Date(Number(headers.get('X-RateLimit-Reset')) * 1000).toLocaleString()
        : 'unknown',
    }

    fs.writeFileSync(
      RATE_LIMIT_FILE,
      JSON.stringify(rateLimitInfo, null, 2),
    )

    console.error(`GitHub API rate limit info saved to ${RATE_LIMIT_FILE}`)
    console.error(`Rate limit: ${rateLimitInfo.remaining}/${rateLimitInfo.limit} remaining, resets at ${rateLimitInfo.humanReadableReset}`)
  }
  catch (error) {
    console.error('Failed to save rate limit info:', error)
  }
}

/**
 * Checks if we should proceed with GitHub API requests based on saved rate limit info
 * @returns {boolean} true if we should proceed, false if we should wait
 */
export function shouldProceedWithGitHubRequest(): boolean {
  try {
    if (!fs.existsSync(RATE_LIMIT_FILE)) {
      return true // No rate limit file exists yet, proceed
    }

    const rateLimitInfo = JSON.parse(fs.readFileSync(RATE_LIMIT_FILE, 'utf8'))
    const remaining = Number(rateLimitInfo.remaining)

    // If we have more than 5 requests remaining, proceed
    if (remaining > 5) {
      return true
    }

    // Check if the reset time has passed
    const resetTime = Number(rateLimitInfo.reset) * 1000 // Convert to milliseconds
    const now = Date.now()

    if (now > resetTime) {
      return true // Reset time has passed, proceed
    }

    // We're rate limited and the reset time hasn't passed yet
    const waitTimeMs = resetTime - now
    const waitTimeMin = Math.ceil(waitTimeMs / 60000)
    console.error(`GitHub API rate limit reached. Please wait approximately ${waitTimeMin} minutes until ${rateLimitInfo.humanReadableReset}`)
    return false
  }
  catch (error) {
    console.error('Error checking rate limit file:', error)
    return true // Proceed on error (better to try than not)
  }
}

/**
 * Fetches project list from the GitHub API, including nested projects
 * @param limit - Optional limit on the number of projects to return (0 for unlimited)
 * @returns Array of project names from pkgxdev/pantry repository
 */
export async function fetchPackageListFromGitHub(limit = 0): Promise<string[]> {
  try {
    // Check if we should proceed based on rate limits
    if (!shouldProceedWithGitHubRequest()) {
      throw new Error('GitHub API rate limit reached, using fallback data')
    }

    console.error('Fetching package list from GitHub API...')

    // API URL for pkgxdev/pantry projects directory
    const apiUrl = 'https://api.github.com/repos/pkgxdev/pantry/contents/projects'

    const response = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'pkgx-tools',
      },
      // Ensure we don't hang indefinitely
      signal: AbortSignal.timeout(30000),
    })

    // Save rate limit information regardless of success
    saveRateLimitInfo(response.headers)

    // Handle rate limiting
    if (response.status === 403) {
      const rateLimitRemaining = response.headers.get('X-RateLimit-Remaining')
      const rateLimitReset = response.headers.get('X-RateLimit-Reset')

      console.error(`GitHub API rate limit exceeded. Remaining: ${rateLimitRemaining}, Reset: ${new Date(Number(rateLimitReset) * 1000).toLocaleString()}`)
      throw new Error('GitHub API rate limit exceeded')
    }

    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}: ${response.statusText}`)
    }

    const data = await response.json() as any[]

    // Extract project names
    const baseProjects = data
      .filter(item => item.type === 'dir')
      .map(item => item.name)

    console.error(`Found ${baseProjects.length} base projects on GitHub`)

    // We need to check for subprojects for each domain, but we'll be careful with rate limits
    const allProjects: string[] = []

    // Add all base projects first
    allProjects.push(...baseProjects)

    // Process known nested projects
    const nestedProjectPromises: Promise<string[]>[] = []

    // Check for nested projects in domains that commonly have them
    // We'll check a small number of domains to avoid hitting rate limits
    const domainsToCheck = ['agwa.name', 'acorn.io', 'apache.org', 'aquasecurity.github.io', 'aws.amazon.com'].filter(
      domain => baseProjects.includes(domain),
    )

    for (const domain of domainsToCheck) {
      // Check for nested projects in this domain
      nestedProjectPromises.push(fetchNestedProjects(domain))
    }

    // Wait for all nested project checks to complete
    const nestedProjectsList = await Promise.all(nestedProjectPromises)

    // Add all nested projects
    for (const nestedProjects of nestedProjectsList) {
      allProjects.push(...nestedProjects)
    }

    // Add known nested projects directly from a hardcoded list to avoid GitHub API rate limiting
    const knownNestedProjects = [
      'acorn.io/acorn-cli',
      'agwa.name/git-crypt',
      'alsa-project.org/alsa-lib',
      'aquasecurity.github.io/tfsec',
      'aquasecurity.github.io/trivy',
      'apple.com/remote_cmds',
      'android.com/cmdline-tools',
      'anchore.com/syft',
      'argoproj.github.io/cd',
      'argoproj.github.io/workflows',
      'amrdeveloper.github.io/GQL',
      'authzed.com/spicedb',
      'arduino.github.io/arduino-cli',
      'aomedia.googlesource.com/aom',
      'aws.amazon.com/cdk',
      'aws.amazon.com/cli',
      'aws.amazon.com/sam',
      'akuity.io/kargo',
      'asciinema.org/agg',
      'apache.org/apr-util',
      'apache.org/apr',
      'apache.org/arrow',
      'apache.org/avro',
      'apache.org/httpd',
      'apache.org/jmeter',
      'apache.org/subversion',
      'apache.org/thrift',
      'apache.org/zookeeper',
      'ansible.com/ansible-lint',
      'astral.sh/ruff',
      'astral.sh/uv',
      'apollographql.com/rover',
      'brxken128.github.io/dexios',
      'cedarpolicy.com/cli',
      'blake2.net/libb2',
    ]

    // Add the known nested projects if they don't already exist
    for (const nestedProject of knownNestedProjects) {
      if (!allProjects.includes(nestedProject)) {
        console.error(`Adding known nested project: ${nestedProject}`)
        allProjects.push(nestedProject)
      }
    }

    console.error(`Total of ${allProjects.length} projects found (including nested paths)`)

    // Apply limit if specified (0 means no limit)
    return limit > 0 ? allProjects.slice(0, limit) : allProjects
  }
  catch (error) {
    console.error('Error fetching projects from GitHub:', error)

    // Fallback to hardcoded list if GitHub API fails
    const fallbackList = [
      // Base projects
      'node',
      'python',
      'go',
      'rust',
      'ruby',
      'php',
      'perl',
      'deno',
      'bun',
      'postgresql.org',
      'llvm.org',
      'cmake.org',
      'sqlite.org',
      'mysql.com',
      'nginx.org',
      // Nested projects
      'acorn.io/acorn-cli',
      'agwa.name/git-crypt',
      'alsa-project.org/alsa-lib',
      'aquasecurity.github.io/tfsec',
      'aquasecurity.github.io/trivy',
      'apple.com/remote_cmds',
      'android.com/cmdline-tools',
      'anchore.com/syft',
      'argoproj.github.io/cd',
      'argoproj.github.io/workflows',
      'amrdeveloper.github.io/GQL',
      'authzed.com/spicedb',
      'arduino.github.io/arduino-cli',
      'aomedia.googlesource.com/aom',
      'aws.amazon.com/cdk',
      'aws.amazon.com/cli',
      'aws.amazon.com/sam',
      'akuity.io/kargo',
      'asciinema.org/agg',
      'apache.org/apr-util',
      'apache.org/apr',
      'apache.org/arrow',
      'apache.org/avro',
      'apache.org/httpd',
      'apache.org/jmeter',
      'apache.org/subversion',
      'apache.org/thrift',
      'apache.org/zookeeper',
      'ansible.com/ansible-lint',
      'astral.sh/ruff',
      'astral.sh/uv',
      'apollographql.com/rover',
      'brxken128.github.io/dexios',
      'cedarpolicy.com/cli',
      'blake2.net/libb2',
    ]

    console.error(`Falling back to ${fallbackList.length} hardcoded projects`)

    // Apply limit if specified (0 means no limit)
    return limit > 0 ? fallbackList.slice(0, limit) : fallbackList
  }
}

/**
 * Fetches nested projects for a given domain from GitHub API
 * @param domain Domain to check for nested projects
 * @returns Promise resolving to array of nested project paths
 */
async function fetchNestedProjects(domain: string): Promise<string[]> {
  try {
    // Check if we should proceed based on rate limits
    if (!shouldProceedWithGitHubRequest()) {
      console.error(`Skipping nested project check for ${domain} due to rate limits`)
      return []
    }

    console.error(`Checking for nested projects in ${domain}...`)

    // API URL for the domain directory
    const apiUrl = `https://api.github.com/repos/pkgxdev/pantry/contents/projects/${domain}`

    const response = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'pkgx-tools',
      },
      // Add a short timeout
      signal: AbortSignal.timeout(10000),
    })

    // Save rate limit information
    saveRateLimitInfo(response.headers)

    // Handle errors
    if (!response.ok) {
      if (response.status === 404) {
        console.error(`No nested projects found for ${domain} (404)`)
      }
      else {
        console.error(`GitHub API error for ${domain}: ${response.status} ${response.statusText}`)
      }
      return []
    }

    const data = await response.json() as any[]

    // Extract nested project paths
    const nestedProjects = data
      .filter(item => item.type === 'dir')
      .map(item => `${domain}/${item.name}`)

    if (nestedProjects.length > 0) {
      console.error(`Found ${nestedProjects.length} nested projects for ${domain}: ${nestedProjects.join(', ')}`)
    }
    else {
      console.error(`No nested projects found for ${domain}`)
    }

    return nestedProjects
  }
  catch (error) {
    console.error(`Error checking nested projects for ${domain}:`, error)
    return []
  }
}
