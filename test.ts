import { fetchPkgxProjects } from './src/index'

/**
 * Simple demo to fetch and display pkgx project folders
 */
async function main(): Promise<void> {
  try {
    // eslint-disable-next-line no-console
    console.log('Starting demo...')

    const projects = await fetchPkgxProjects()
    // eslint-disable-next-line no-console
    console.log(`Found ${projects.length} projects`)

    if (projects.length > 0) {
      // eslint-disable-next-line no-console
      console.log('\nFirst 10 projects:')
      projects.slice(0, 10).forEach((project) => {
        // eslint-disable-next-line no-console
        console.log(`- ${project.name}`)
      })

      if (projects.length > 10) {
        // eslint-disable-next-line no-console
        console.log(`... and ${projects.length - 10} more`)
      }
    }

    // eslint-disable-next-line no-console
    console.log('Demo completed')
  }
  catch (error) {
    console.error('Demo failed:', error)
    throw error
  }
}

// Run the demo
main().catch((error) => {
  console.error('Unhandled error:', error)
})
