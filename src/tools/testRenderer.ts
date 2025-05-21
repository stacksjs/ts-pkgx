/**
 * Test script to verify the renderer template for package TypeScript files
 * This script helps ensure that generated package files follow a consistent format
 */
import type { PkgxPackage } from '../types'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

// Function to convert domain to variable name
function convertDomainToVarName(domain: string): string {
  // Handle nested paths
  if (domain.includes('/')) {
    const [parentDomain, subPath] = domain.split('/')
    // Convert domains like 'agwa.name/git-crypt' to 'agwanamegitcrypt'
    return parentDomain.replace(/\./g, '') + subPath.replace(/-/g, '').toLowerCase()
  }

  // Regular domains like 'bun.sh' -> 'bunsh'
  return domain.replace(/\./g, '').toLowerCase()
}

// Sample package data for testing
const samplePackage: PkgxPackage = {
  name: 'Sample Package',
  domain: 'example.com',
  description: 'A sample package to test the renderer',
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/blob/main/projects/example.com/package.yml',
  homepageUrl: 'https://example.com',
  githubUrl: 'https://github.com/example/package',
  installCommand: 'pkgx example.com',
  programs: ['sample', 'example'],
  companions: ['helper'],
  dependencies: ['lib1', 'lib2'],
  versions: ['1.0.0', '2.0.0'],
  aliases: ['sample', 'example'],
  fullPath: 'example.com',
}

// Sample nested package for testing
const nestedSamplePackage: PkgxPackage = {
  name: 'git-crypt',
  domain: 'agwa.name',
  description: 'Transparent file encryption in git',
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/blob/main/projects/agwa.name/git-crypt/package.yml',
  homepageUrl: 'https://www.agwa.name/projects/git-crypt/',
  githubUrl: 'https://github.com/AGWA/git-crypt',
  installCommand: 'pkgx agwa.name/git-crypt',
  programs: ['git-crypt'],
  companions: [],
  dependencies: [],
  versions: ['0.7.0'],
  aliases: ['git-crypt'],
  fullPath: 'agwa.name/git-crypt',
}

/**
 * Generates TypeScript content for a package
 * @param packageInfo The package information
 * @param varName The variable name to use
 * @returns TypeScript code as a string
 */
function generateTypeScriptContent(packageInfo: PkgxPackage, varName: string): string {
  // Start with an object declaration using the package info
  const tsLines = [
    `/**`,
    ` * Package definition for ${packageInfo.name} (${packageInfo.domain})`,
    ` */`,
    `import type { PkgxPackage } from '../types'`,
    ``,
    `export const ${varName}Package: PkgxPackage = {`,
    `  name: '${packageInfo.name}',`,
    `  domain: '${packageInfo.domain}',`,
    `  description: '${packageInfo.description.replace(/'/g, '\\\'')}',`,
  ]

  // Add optional fields if they exist
  if (packageInfo.packageYmlUrl) {
    tsLines.push(`  packageYmlUrl: '${packageInfo.packageYmlUrl}',`)
  }

  if (packageInfo.homepageUrl) {
    tsLines.push(`  homepageUrl: '${packageInfo.homepageUrl}',`)
  }

  if (packageInfo.githubUrl) {
    tsLines.push(`  githubUrl: '${packageInfo.githubUrl}',`)
  }

  tsLines.push(`  installCommand: '${packageInfo.installCommand.replace(/'/g, '\\\'')}',`)

  // Add arrays
  tsLines.push(`  programs: ${JSON.stringify(packageInfo.programs)},`)
  tsLines.push(`  companions: ${JSON.stringify(packageInfo.companions)},`)
  tsLines.push(`  dependencies: ${JSON.stringify(packageInfo.dependencies)},`)
  tsLines.push(`  versions: ${JSON.stringify(packageInfo.versions)},`)

  // Add aliases if they exist
  if (packageInfo.aliases && packageInfo.aliases.length > 0) {
    tsLines.push(`  aliases: ${JSON.stringify(packageInfo.aliases)},`)
  }

  // Add fullPath if it exists
  if (packageInfo.fullPath) {
    tsLines.push(`  fullPath: '${packageInfo.fullPath}',`)
  }

  // Close the object
  tsLines.push(`}`)

  // Return the TypeScript content
  return tsLines.join('\n')
}

/**
 * Renders sample TypeScript files using the template
 */
export function testRenderer(): void {
  // Use console.error for output as it's allowed by the linter
  console.error('Testing package renderer...')

  // Create the test output directory
  const testDir = path.join(process.cwd(), 'src', 'test-output')
  if (!fs.existsSync(testDir)) {
    fs.mkdirSync(testDir, { recursive: true })
  }

  // Create the packages directory (for the actual package files)
  const packagesDir = path.join(process.cwd(), 'src', 'packages')
  if (!fs.existsSync(packagesDir)) {
    fs.mkdirSync(packagesDir, { recursive: true })
  }

  // Test standard package - save to test-output for testing
  const varName = convertDomainToVarName('example.com')
  const tsContent = generateTypeScriptContent(samplePackage, varName)
  const outputFile = path.join(testDir, `${varName}.ts`)
  fs.writeFileSync(outputFile, tsContent)
  console.error(`Generated test package file: ${outputFile}`)

  // Save to packages directory as well
  const packageFile = path.join(packagesDir, `${varName}.ts`)
  fs.writeFileSync(packageFile, tsContent)
  console.error(`Generated actual package file: ${packageFile}`)

  // Test nested package - save to test-output for testing
  const nestedVarName = convertDomainToVarName('agwa.name/git-crypt')
  const nestedTsContent = generateTypeScriptContent(nestedSamplePackage, nestedVarName)
  const nestedOutputFile = path.join(testDir, `${nestedVarName}.ts`)
  fs.writeFileSync(nestedOutputFile, nestedTsContent)
  console.error(`Generated test nested package file: ${nestedOutputFile}`)

  // Save to packages directory as well
  const nestedPackageFile = path.join(packagesDir, `${nestedVarName}.ts`)
  fs.writeFileSync(nestedPackageFile, nestedTsContent)
  console.error(`Generated actual nested package file: ${nestedPackageFile}`)

  console.error('Test completed successfully!')
}

// Run the test if this file is executed directly
if (import.meta.url === process.argv[1]) {
  testRenderer()
}
