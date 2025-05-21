/**
 * Test script to verify package lookups
 * This script tests that packages can be looked up by domain, alias, and nested path
 */
import process from 'node:process'
import { getPackage, pantry } from '../packages'

/**
 * Tests package lookup functionality including domain, alias, and nested path lookups
 * @returns Object with test results
 */
export function testLookup(): Record<string, boolean> {
  console.error('Testing package lookup functionality...')

  // Test the pantry
  console.error(`Pantry contains ${Object.keys(pantry).length} packages`)

  const results: Record<string, boolean> = {}

  // Test direct lookups
  const examplePackage = getPackage('example.com')
  results.directDomainLookup = !!examplePackage
  console.error('Looking up example.com:', examplePackage ? 'Found' : 'Not found')

  // Test alias lookup
  const samplePackage = getPackage('sample')
  results.aliasLookup = !!samplePackage
  console.error('Looking up by alias "sample":', samplePackage ? 'Found' : 'Not found')

  // Test nested path lookup
  const gitCryptPackage = getPackage('agwa.name/git-crypt')
  results.nestedPathLookup = !!gitCryptPackage
  console.error('Looking up nested path agwa.name/git-crypt:', gitCryptPackage ? 'Found' : 'Not found')

  // Test direct lookup of parent domain
  const agwaPackage = getPackage('agwa.name')
  results.parentDomainLookup = !!agwaPackage
  console.error('Looking up parent domain agwa.name:', agwaPackage ? 'Found' : 'Not found')

  // Test alias lookup of subpath
  const gitCryptAliasPackage = getPackage('git-crypt')
  results.subpathAliasLookup = !!gitCryptAliasPackage
  console.error('Looking up by subpath alias "git-crypt":', gitCryptAliasPackage ? 'Found' : 'Not found')

  console.error('Lookup test completed')

  return results
}

// Run the test if this file is executed directly
if (import.meta.url === process.argv[1]) {
  testLookup()
}
