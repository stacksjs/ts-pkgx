/**
 * pkgx.dev-specific scraper using the client-side scraper
 *
 * This demonstrates how to use the client-side scraper for a specific site
 */

import type { PkgxPackageData } from './pkgx-fetcher'
import { scrapeClientSide } from 'ts-web-scraper'

export interface PkgxScraperOptions {
  timeout?: number
  useClientSideScraper?: boolean
}

/**
 * Scrape package data from pkgx.dev using the client-side scraper
 */
export async function scrapePkgxPackage(
  packageName: string,
  options: PkgxScraperOptions = {},
): Promise<PkgxPackageData> {
  const {
    timeout = 30000,
    useClientSideScraper = true,
  } = options

  const url = `https://pkgx.dev/pkgs/${packageName}/`

  if (useClientSideScraper) {
    // Use the client-side scraper to discover APIs
    const scraped = await scrapeClientSide(url, {
      timeout,
      analyzeJavaScript: true,
      reconstructAPI: true,
      maxJSFiles: 2, // pkgx.dev typically has 1-2 bundle files
    })

    // Look for the JSON API response in the scraped data
    for (const [endpoint, data] of scraped.apiResponses) {
      if (endpoint.includes('.json') && endpoint.includes(packageName)) {
        // Found the package JSON data
        return normalizePackageData(data, packageName)
      }
    }

    // If we didn't find it in API responses, try constructing the URL
    // based on discovered patterns
    const jsonEndpoint = findJSONEndpoint(scraped.apiEndpoints, packageName)
    if (jsonEndpoint) {
      try {
        const response = await fetch(jsonEndpoint, {
          headers: {
            Accept: 'application/json',
          },
        })

        if (response.ok) {
          const data = await response.json()
          return normalizePackageData(data, packageName)
        }
      }
      catch {
        // Fall through
      }
    }
  }

  // Fallback: Direct JSON API call (we discovered this pattern)
  const directUrl = `https://pkgx.dev/pkgs/${packageName}.json`

  try {
    const response = await fetch(directUrl, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'ts-pkgx',
      },
    })

    if (response.ok) {
      const data = await response.json()
      return normalizePackageData(data, packageName)
    }
  }
  catch {
    // Fall through
  }

  throw new Error(`Failed to scrape package data for ${packageName}`)
}

/**
 * Find the JSON endpoint pattern from discovered endpoints
 */
function findJSONEndpoint(endpoints: string[], packageName: string): string | null {
  // Look for patterns like:
  // - /pkgs/${packageName}.json
  // - /pkgs/${packageName}/data.json

  for (const endpoint of endpoints) {
    // Replace template variables with actual package name
    const resolved = endpoint
      .replace(/\$\{[^}]+\}/g, packageName)
      .replace(/\*/g, packageName)

    if (resolved.includes('.json') && resolved.includes(packageName)) {
      return resolved
    }
  }

  // Try common patterns
  const patterns = [
    `https://pkgx.dev/pkgs/${packageName}.json`,
    `https://pkgx.dev/pkgs/${packageName}/data.json`,
    `https://pkgx.dev/api/pkgs/${packageName}`,
  ]

  return patterns[0]
}

/**
 * Normalize package data from various sources
 */
function normalizePackageData(data: any, packageName: string): PkgxPackageData {
  return {
    name: data.displayName || data.name || packageName.split('/').pop() || packageName,
    domain: data.project || packageName,
    brief: data.brief,
    description: data.description || data.brief,
    displayName: data.displayName,
    homepage: data.homepage,
    github: data.github,
    brew_url: data.brew_url,
    license: data.license,
    provides: data.provides,
    companions: data.companions,
    dependencies: data.dependencies,
    build: data.build,
    interprets: data.interprets,
    ...data,
  }
}

/**
 * Scrape multiple packages
 */
export async function scrapePkgxPackages(
  packageNames: string[],
  options: PkgxScraperOptions = {},
): Promise<Map<string, PkgxPackageData>> {
  const results = new Map<string, PkgxPackageData>()

  const promises = packageNames.map(async (name) => {
    try {
      const data = await scrapePkgxPackage(name, options)
      results.set(name, data)
    }
    catch (error) {
      console.error(`Failed to scrape ${name}:`, error)
    }
  })

  await Promise.all(promises)

  return results
}

/**
 * List all packages by scraping the index
 */
export async function scrapePkgxIndex(
  options: PkgxScraperOptions = {},
): Promise<string[]> {
  const { timeout = 15000 } = options

  // Use the discovered index endpoint
  const indexUrl = 'https://pkgx.dev/pkgs/index.json'

  try {
    const response = await fetch(indexUrl, {
      headers: {
        Accept: 'application/json',
      },
    })

    if (response.ok) {
      const data = await response.json() as Array<{ project: string }>
      return data.map(item => item.project)
    }
  }
  catch {
    // Fall through
  }

  // Fallback: scrape the main page
  const scraped = await scrapeClientSide('https://pkgx.dev/pkgs/', {
    timeout,
    analyzeJavaScript: true,
    reconstructAPI: true,
  })

  // Look for index data in API responses
  for (const [endpoint, data] of scraped.apiResponses) {
    if (endpoint.includes('index.json') && Array.isArray(data)) {
      return data.map(item => item.project || item)
    }
  }

  throw new Error('Failed to scrape package index')
}
