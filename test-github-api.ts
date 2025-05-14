/**
 * Test script to verify GitHub API rate limiting functionality
 */
import { fetchPackageListFromGitHub } from './src/utils'

async function main() {
  try {
    console.log('Testing GitHub API rate limiting...')

    // First call should create the rate limit file
    console.log('First API call:')
    const packages = await fetchPackageListFromGitHub(10)
    console.log(`Found ${packages.length} packages`)

    // Second call should use the rate limit file info
    console.log('\nSecond API call:')
    const morePackages = await fetchPackageListFromGitHub(5)
    console.log(`Found ${morePackages.length} packages`)

    console.log('\nTest completed successfully')
  }
  catch (error) {
    console.error('Test failed:', error)
  }
}

main().catch(console.error)
