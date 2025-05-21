import type { FetchProjectsOptions, GitHubContent, ProjectFolder } from './types'

export * from './packages'
export * from './types'

/**
 * Fetches project folder names from the pkgxdev pantry repository using GitHub API
 * @param options Optional configuration
 * @returns Promise resolving to an array of project folders
 */
export async function fetchPkgxProjects(options: FetchProjectsOptions = {}): Promise<ProjectFolder[]> {
  const apiUrl = options.apiUrl || 'https://api.github.com/repos/pkgxdev/pantry/contents/projects'

  try {
    // eslint-disable-next-line no-console
    console.log(`Fetching projects from GitHub API: ${apiUrl}`)

    const response = await fetch(apiUrl, {
      headers: {
        // Using GitHub API without authentication has a lower rate limit
        // If you hit rate limits, you'll need to add an auth token
        Accept: 'application/vnd.github.v3+json',
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch from GitHub API: ${response.statusText}`)
    }

    const contents = await response.json() as GitHubContent[]

    // Filter to only include directories
    const projects = contents
      .filter(item => item.type === 'dir')
      .map(item => ({
        name: item.name,
        url: item.html_url,
      }))

    return projects
  }
  catch (error) {
    console.error('Error fetching projects from GitHub API:', error)
    throw error
  }
}

/**
 * Demo function to show how to use fetchPkgxProjects
 * @returns Promise resolving to array of projects or empty array on error
 */
export async function logPkgxProjects(): Promise<ProjectFolder[]> {
  try {
    // Fetch all projects using the API
    const projects = await fetchPkgxProjects()

    // Use allowed console methods
    console.error(`Found ${projects.length} projects`)

    // Display first 10 projects as an example - using error since it's allowed
    if (projects.length > 0) {
      console.error('First 10 projects:')
      projects.slice(0, 10).forEach((project) => {
        console.error(`- ${project.name}`)
      })

      if (projects.length > 10) {
        console.error(`... and ${projects.length - 10} more`)
      }
    }

    return projects
  }
  catch (error) {
    console.error('Failed to fetch projects:', error)
    return []
  }
}
