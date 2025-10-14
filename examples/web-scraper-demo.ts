/**
 * Web Scraper Demo
 *
 * This example demonstrates how to use the built-in web scraper module
 * that uses only Bun native APIs (no external dependencies like Playwright).
 *
 * Run this with: bun examples/web-scraper-demo.ts
 */

import {
  extractLinks,
  extractMeta,
  extractStructuredData,
  extractText,
  fetchHTML,
  fetchMultiple,
  parseHTML,
} from 'ts-web-scraper'

async function basicExample() {
  console.log('\n=== Basic Example ===\n')

  // Fetch and parse a web page
  const doc = await fetchHTML('https://example.com', {
    timeout: 10000,
    userAgent: 'MyBot/1.0',
  })

  // Query DOM elements
  const title = doc.querySelector('title')
  console.log('Page Title:', title?.textContent)

  const h1 = doc.querySelector('h1')
  console.log('Main Heading:', h1?.textContent)

  // Get all links
  const links = doc.querySelectorAll('a')
  console.log('Number of links:', links.length)

  // Get links with href attribute
  const hrefs = links
    .map(link => link.getAttribute('href'))
    .filter(Boolean)
  console.log('First 5 links:', hrefs.slice(0, 5))
}

async function extractionExample() {
  console.log('\n=== Extraction Example ===\n')

  const response = await fetch('https://example.com')
  const html = await response.text()

  // Extract all text content
  const text = extractText(html)
  console.log('Extracted Text (first 200 chars):', text.slice(0, 200))

  // Extract all links
  const links = extractLinks(html, 'https://example.com')
  console.log('Extracted Links:', links.slice(0, 5))

  // Extract meta tags
  const meta = extractMeta(html)
  console.log('Meta Tags:', meta)
}

async function structuredDataExample() {
  console.log('\n=== Structured Data Example ===\n')

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta property="og:title" content="My Page Title">
      <meta property="og:description" content="A great page">
      <meta property="og:image" content="https://example.com/image.jpg">
      <meta name="twitter:card" content="summary_large_image">
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Example Article",
        "author": "John Doe"
      }
      </script>
    </head>
    <body>
      <h1>Hello World</h1>
    </body>
    </html>
  `

  const data = extractStructuredData(html)
  console.log('JSON-LD:', data.jsonLd)
  console.log('Open Graph:', data.openGraph)
  console.log('Twitter Card:', data.twitter)
}

async function advancedQueryExample() {
  console.log('\n=== Advanced Query Example ===\n')

  const html = `
    <!DOCTYPE html>
    <html>
    <body>
      <div class="container">
        <h1 id="main-title">Welcome</h1>
        <p class="intro">This is an introduction.</p>
        <a href="/page1" class="link">Page 1</a>
        <a href="/page2" class="link active">Page 2</a>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    </body>
    </html>
  `

  const doc = parseHTML(html)

  // Query by ID
  const title = doc.getElementById('main-title')
  console.log('Title by ID:', title?.textContent)

  // Query by class
  const links = doc.getElementsByClassName('link')
  console.log('Links by class:', links.map(l => l.getAttribute('href')))

  // Query by tag
  const listItems = doc.getElementsByTagName('li')
  console.log('List items:', listItems.map(li => li.textContent))

  // Query with selector
  const activeLink = doc.querySelector('a.active')
  console.log('Active link:', activeLink?.getAttribute('href'))

  // Query all with selector
  const allLinks = doc.querySelectorAll('a')
  console.log('All links:', allLinks.length)
}

async function batchFetchExample() {
  console.log('\n=== Batch Fetch Example ===\n')

  const urls = [
    'https://example.com',
    'https://www.iana.org',
  ]

  const results = await fetchMultiple(urls, {
    timeout: 10000,
  })

  for (const [url, doc] of results) {
    const title = doc.querySelector('title')?.textContent
    console.log(`${url}: ${title}`)
  }
}

async function pkgxScrapingExample() {
  console.log('\n=== pkgx.dev Scraping Example ===\n')

  try {
    // Fetch a package page from pkgx.dev
    const doc = await fetchHTML('https://pkgx.dev/pkgs/nodejs.org/', {
      timeout: 15000,
    })

    // Extract package information
    const title = doc.querySelector('title')?.textContent
    console.log('Page Title:', title)

    // Extract description (adjust selectors based on actual page structure)
    const description = doc.querySelector('h5, .description, [class*="description"]')
    console.log('Description:', description?.textContent?.trim())

    // Find links
    const links = doc.querySelectorAll('a[href*="package.yml"], a[href*="GitHub"]')
    console.log('\nPackage Links:')
    links.forEach((link) => {
      console.log(`  - ${link.textContent?.trim()}: ${link.getAttribute('href')}`)
    })

    // Extract version information if available
    const versionElements = doc.querySelectorAll('[class*="version"], [class*="Version"]')
    console.log('\nVersion Elements:')
    versionElements.forEach((el) => {
      console.log(`  - ${el.textContent?.trim()}`)
    })
  }
  catch (error) {
    console.error('Error scraping pkgx.dev:', error)
  }
}

async function yamlExample() {
  console.log('\n=== Bun YAML Example ===\n')

  // Example YAML data
  const yamlString = `
name: example-package
version: 1.0.0
dependencies:
  - nodejs
  - typescript
config:
  port: 3000
  host: localhost
`

  // Parse YAML using Bun's native API
  const data = Bun.YAML.parse(yamlString)
  console.log('Parsed YAML:', data)

  // Stringify back to YAML
  const yamlOutput = Bun.YAML.stringify(data, null, 2)
  console.log('\nStringified YAML:')
  console.log(yamlOutput)
}

// Run all examples
async function main() {
  console.log('🌐 Web Scraper Demo - Using Only Bun Native APIs\n')
  console.log('This demo shows how to scrape web pages without Playwright')
  console.log('or any other external dependencies.\n')

  try {
    // Run examples that don't require network
    await structuredDataExample()
    await advancedQueryExample()
    await yamlExample()

    // Uncomment to run network examples (requires internet connection)
    // await basicExample()
    // await extractionExample()
    // await batchFetchExample()
    // await pkgxScrapingExample()

    console.log('\n✅ Demo completed!\n')
    console.log('To run network examples, uncomment them in the main() function.')
  }
  catch (error) {
    console.error('❌ Error:', error)
    process.exit(1)
  }
}

// Run if executed directly
if (import.meta.main) {
  main()
}
