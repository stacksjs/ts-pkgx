/**
 * Client-Side Scraper Demo
 *
 * This demonstrates how to scrape JavaScript-rendered websites
 * (React, Vue, Next.js, etc.) without using Playwright or any browser.
 *
 * The scraper:
 * 1. Detects if a site is client-side rendered
 * 2. Extracts and analyzes JavaScript bundles
 * 3. Finds API endpoints in the JavaScript code
 * 4. Discovers embedded data (__NEXT_DATA__, Redux state, etc.)
 * 5. Fetches data from discovered APIs
 *
 * All using ONLY Bun native APIs!
 *
 * Run with: bun examples/client-side-scraper-demo.ts
 */

import {
  extractData,
  isClientSideRendered,
  scrapeClientSide,
} from 'ts-web-scraper'
import {
  scrapePkgxIndex,
  scrapePkgxPackage,
} from '../src/pkgx-scraper'

console.log('🕷️  Client-Side Web Scraper Demo\n')
console.log('Scraping JavaScript-rendered sites WITHOUT Playwright!\n')

// Example 1: Detect client-side rendering
async function example1() {
  console.log('=== Example 1: Detect Client-Side Rendering ===\n')

  const sites = [
    'https://pkgx.dev',
    'https://example.com', // Static HTML
  ]

  for (const url of sites) {
    const isCSR = await isClientSideRendered(url)
    console.log(`${url}`)
    console.log(`  Client-side rendered: ${isCSR ? '✅ Yes' : '❌ No'}`)
  }

  console.log()
}

// Example 2: Full scrape analysis
async function example2() {
  console.log('\n=== Example 2: Full Scrape Analysis ===\n')

  const url = 'https://pkgx.dev/pkgs/nodejs.org/'
  console.log(`Analyzing: ${url}\n`)

  const scraped = await scrapeClientSide(url, {
    analyzeJavaScript: true,
    findEmbeddedData: true,
    reconstructAPI: true,
    maxJSFiles: 2, // Analyze up to 2 JS bundles
  })

  console.log('📄 Meta Information:')
  console.log(`  Title: ${scraped.meta.title}`)
  console.log(`  Description: ${scraped.meta.description}`)

  console.log('\n📜 JavaScript Bundles Found:', scraped.scriptUrls.length)
  scraped.scriptUrls.forEach((url, i) => {
    console.log(`  ${i + 1}. ${url}`)
  })

  console.log('\n🔌 API Endpoints Discovered:', scraped.apiEndpoints.length)
  scraped.apiEndpoints.slice(0, 10).forEach((endpoint, i) => {
    console.log(`  ${i + 1}. ${endpoint}`)
  })

  console.log('\n💾 Embedded Data:')
  const embeddedKeys = Object.keys(scraped.embeddedData)
  if (embeddedKeys.length > 0) {
    embeddedKeys.forEach((key) => {
      console.log(`  - ${key}`)
    })
  }
  else {
    console.log('  (No embedded data found)')
  }

  console.log('\n📡 API Responses:', scraped.apiResponses.size)
  for (const [endpoint, data] of scraped.apiResponses) {
    console.log(`  ✅ ${endpoint}`)
    if (typeof data === 'object' && !Array.isArray(data)) {
      const keys = Object.keys(data)
      console.log(`     Keys: ${keys.slice(0, 5).join(', ')}${keys.length > 5 ? '...' : ''}`)
    }
  }
}

// Example 3: Quick data extraction
async function example3() {
  console.log('\n=== Example 3: Quick Data Extraction ===\n')

  const url = 'https://pkgx.dev/pkgs/python.org/'
  console.log(`Extracting data from: ${url}\n`)

  const data = await extractData(url)

  console.log('Extracted data:')
  if (typeof data === 'object') {
    const keys = Object.keys(data)
    console.log(`  Type: ${Array.isArray(data) ? 'Array' : 'Object'}`)
    console.log(`  Keys: ${keys.slice(0, 10).join(', ')}`)

    // Show sample data
    if (data.name || data.displayName) {
      console.log('\nSample fields:')
      console.log(`  Name: ${data.name || data.displayName}`)
      console.log(`  Description: ${data.description || data.brief}`)
    }
  }
}

// Example 4: pkgx-specific scraper
async function example4() {
  console.log('\n=== Example 4: pkgx-Specific Scraper ===\n')

  // This shows how to create site-specific scrapers
  // using the generic client-side scraper

  console.log('Scraping nodejs.org package...')
  const nodePackage = await scrapePkgxPackage('nodejs.org', {
    useClientSideScraper: true, // Use the client-side scraper
  })

  console.log('\nPackage Information:')
  console.log(`  Name: ${nodePackage.displayName}`)
  console.log(`  Description: ${nodePackage.brief}`)
  console.log(`  License: ${nodePackage.license}`)
  console.log(`  GitHub: ${nodePackage.github}`)
  console.log(`  Homepage: ${nodePackage.homepage}`)
  console.log(`  Provides: ${nodePackage.provides?.join(', ')}`)

  console.log('\nListing all packages...')
  const allPackages = await scrapePkgxIndex()
  console.log(`  Total packages: ${allPackages.length}`)
  console.log(`  First 5: ${allPackages.slice(0, 5).join(', ')}`)
}

// Example 5: How the scraper works
function example5() {
  console.log('\n=== Example 5: How It Works ===\n')

  console.log('The Client-Side Scraper:')
  console.log('  1. 📥 Fetches the initial HTML (usually empty for React apps)')
  console.log('  2. 🔍 Extracts JavaScript bundle URLs from <script> tags')
  console.log('  3. 📜 Downloads and analyzes JavaScript bundles')
  console.log('  4. 🎯 Finds API endpoint patterns using regex:')
  console.log('     - fetch() calls')
  console.log('     - axios/request calls')
  console.log('     - API route patterns')
  console.log('     - baseURL configurations')
  console.log('  5. 💾 Searches for embedded data:')
  console.log('     - __NEXT_DATA__ (Next.js)')
  console.log('     - window.__INITIAL_STATE__')
  console.log('     - Redux state')
  console.log('     - Apollo cache')
  console.log('  6. 📡 Fetches data from discovered endpoints')
  console.log('  7. 🎁 Returns all discovered data\n')

  console.log('Benefits:')
  console.log('  ✅ No browser/Playwright needed')
  console.log('  ✅ Much faster (no browser startup)')
  console.log('  ✅ Lower resource usage')
  console.log('  ✅ Works with ANY client-side rendered site')
  console.log('  ✅ Only Bun native APIs')
  console.log('  ✅ Can be abstracted into standalone library')
}

// Run all examples
async function main() {
  try {
    // Run examples one by one
    // Uncomment to run network examples:
    // await example1()
    // await example2()
    // await example3()
    // await example4()

    // This one doesn't make network requests:
    example5()

    console.log('\n✅ Demo completed!')
    console.log('\nTo run network examples, uncomment them in the main() function.')
    console.log('\nThis client-side scraper can be extracted into its own library')
    console.log('and used to scrape ANY JavaScript-rendered website!')
  }
  catch (error) {
    console.error('❌ Error:', error)
  }
}

if (import.meta.main) {
  main()
}
