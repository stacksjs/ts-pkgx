#!/usr/bin/env bun
/**
 * Script to generate API documentation for all packages in the pantry
 * This script creates a markdown file with a comprehensive list of all packages
 */

import type { PkgxPackage } from '../src/types'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

// The docs output file (default)
const DEFAULT_OUTPUT_FILE = path.join(process.cwd(), 'docs', 'package-catalog.md')

// Import pantry dynamically to avoid circular dependencies
async function importPantry() {
  try {
    // Dynamic import to load the pantry at runtime
    const packages = await import('../src/packages')
    return packages.pantry as Record<string, PkgxPackage>
  }
  catch (error) {
    console.error('Error importing pantry:', error)
    return {}
  }
}

/**
 * Group packages by their category
 */
async function groupPackagesByCategory() {
  const pantry = await importPantry()

  const categories: Record<string, string[]> = {
    'Programming Languages': [
      'nodejs.org',
      'python.org',
      'rust-lang.org',
      'ruby-lang.org',
      'go.dev',
      'scala-lang.org',
      'julialang.org',
      'kotlinlang.org',
      'perl.org',
      'php.net',
      'swift.org',
      'typescriptlang.org',
      'crystal-lang.org',
      'elixir-lang.org',
      'haskell.org',
      'gleam.run',
      'deno.land',
      'vlang.io',
      'zig-lang.org',
      'nim-lang.org',
      'ocaml.org',
    ],
    'Runtimes & Development Tools': [
      'bun.sh',
      'deno.land',
      'wasmer.io',
      'npmjs.com',
      'pnpm.io',
      'yarnpkg.com',
      'rubygemsorg.org',
      'pypa.io',
      'rustup.rs',
      'pythonpoetry.org',
      'pipenv.pypa.io',
      'sdkman.io',
    ],
    'Databases': [
      'postgresql.org',
      'mysql.com',
      'redis.io',
      'mongodb.com',
      'cassandra.apache.org',
      'sqlite.org',
      'influxdata.com',
      'couchdb.apache.org',
      'neo4j.com',
      'fauna.com',
      'planetscale.com',
      'clickhouse.com',
      'surrealdb.com',
    ],
    'DevOps & Cloud': [
      'docker.com',
      'kubernetes.io',
      'terraform.io',
      'github.com',
      'helm.sh',
      'jenkins.io',
      'prometheus.io',
      'hashicorp.com',
      'consul.io',
      'nomad.hashicorp.io',
      'ansible.com',
      'podman.io',
      'traefik.io',
      'envoyproxy.io',
      'istio.io',
      'grafana.com',
      'fluxcd.io',
      'argoproj.github.io',
      'cilium.io',
      'openshift.com',
    ],
    'Utilities': [], // Will be filled with uncategorized packages
  }

  // Track all categorized domains to identify uncategorized ones
  const categorizedDomains = new Set<string>()
  Object.values(categories).forEach((domains) => {
    domains.forEach(domain => categorizedDomains.add(domain))
  })

  // Add all other domains to the Utilities category
  Object.keys(pantry).forEach((domain) => {
    if (!categorizedDomains.has(domain)) {
      categories.Utilities.push(domain)
    }
  })

  return { categories, pantry }
}

/**
 * Generate markdown documentation for packages
 */
export async function generatePackageDocs(outputPath = DEFAULT_OUTPUT_FILE): Promise<void> {
  console.error(`Generating package documentation...`)

  const { categories, pantry } = await groupPackagesByCategory()

  // Generate markdown content
  let content = '# Package Catalog\n\n'
  content += 'This page lists all packages available in ts-pkgx, organized by category.\n\n'
  content += 'Each package can be accessed using `getPackage(name)` or directly via `pantry[domain]`.\n\n'

  // Table of contents
  content += '## Table of Contents\n\n'
  Object.keys(categories).forEach((category) => {
    const slug = category.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    content += `- [${category}](#${slug})\n`
  })
  content += '\n'

  // Generate sections for each category
  for (const [category, domains] of Object.entries(categories)) {
    // Sort domains alphabetically
    domains.sort((a, b) => a.localeCompare(b))

    content += `## ${category}\n\n`
    content += '| Package | Description | Programs | Aliases |\n'
    content += '|---------|-------------|----------|--------|\n'

    for (const domain of domains) {
      try {
        const pkg = pantry[domain]

        if (pkg) {
          // Format aliases
          const aliases = pkg.aliases ? pkg.aliases.join(', ') : '-'

          // Limit programs to first 3 for readability
          let programs = pkg.programs.slice(0, 3).join(', ')
          if (pkg.programs.length > 3) {
            programs += `, ... (${pkg.programs.length - 3} more)`
          }
          if (pkg.programs.length === 0) {
            programs = '-'
          }

          // Escape pipe characters in the description
          const safeDescription = pkg.description.replace(/\|/g, '\\|')

          // Add row for this package
          content += `| **${domain}** | ${safeDescription} | ${programs} | ${aliases} |\n`
        }
      }
      catch (error) {
        console.error(`Error processing ${domain}:`, error)
        content += `| **${domain}** | Error retrieving package information | - | - |\n`
      }
    }

    content += '\n'
  }

  // Add usage example
  content += '## Usage Examples\n\n'
  content += '```typescript\n'
  content += 'import { getPackage, pantry } from \'ts-pkgx/packages\'\n\n'
  content += '// Get a package by domain\n'
  content += 'const nodePackage = pantry[\'nodejs.org\']\n\n'
  content += '// Get a package by alias\n'
  content += 'const nodeByAlias = getPackage(\'node\')\n\n'
  content += '// Access package properties\n'
  content += 'console.log(`Package: ${nodePackage.name} - ${nodePackage.description}`)\n'
  content += 'console.log(`Install: ${nodePackage.installCommand}`)\n'
  content += 'console.log(`Programs: ${nodePackage.programs.join(", ")}`)\n'
  content += '```\n'

  // Write file
  fs.writeFileSync(outputPath, content)
  console.error(`Package documentation written to ${outputPath}`)
}

// Main function - only called when run directly
async function main() {
  try {
    await generatePackageDocs()
    console.error('Package documentation generation completed successfully')
  }
  catch (error) {
    console.error('Error generating package documentation:', error)
    process.exit(1)
  }
}

// Run the main function only when run directly
if (import.meta.url.endsWith('generate-package-docs.ts')) {
  main()
}
