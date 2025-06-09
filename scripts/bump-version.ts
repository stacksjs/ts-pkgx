#!/usr/bin/env bun
/**
 * Simple version bumping script using Bun's semver API
 * Automatically bumps patch version and handles git operations
 */
import { execSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'

interface PackageJson {
  name: string
  version: string
  [key: string]: any
}

function bumpPatchVersion(currentVersion: string): string {
  const parts = currentVersion.split('.')
  if (parts.length !== 3) {
    throw new Error(`Invalid version format: ${currentVersion}`)
  }

  const [major, minor, patch] = parts.map(Number)
  if (Number.isNaN(major) || Number.isNaN(minor) || Number.isNaN(patch)) {
    throw new TypeError(`Invalid version format: ${currentVersion}`)
  }

  return `${major}.${minor}.${patch + 1}`
}

function execCommand(command: string): string {
  try {
    return execSync(command, { encoding: 'utf-8' }).trim()
  }
  catch (error) {
    console.error(`Failed to execute: ${command}`)
    throw error
  }
}

function main() {
  const packageJsonPath = path.join(process.cwd(), 'package.json')
  const isDryRun = process.argv.includes('--dry-run')

  console.log('🔍 Reading package.json...')

  // Read current package.json
  const packageJson: PackageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'))
  const currentVersion = packageJson.version

  console.log(`📦 Current version: ${currentVersion}`)

  // Calculate new version
  const newVersion = bumpPatchVersion(currentVersion)
  console.log(`🚀 New version: ${newVersion}`)

  if (isDryRun) {
    console.log('🧪 Dry run mode - no changes will be made')
    return
  }

  // Update package.json
  packageJson.version = newVersion
  writeFileSync(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`)
  console.log('✅ Updated package.json')

  // Git operations
  console.log('📝 Committing changes...')
  execCommand('git add package.json')
  execCommand(`git commit -m "chore: release v${newVersion}"`)

  console.log('🏷️  Creating tag...')
  execCommand(`git tag v${newVersion}`)

  console.log('📤 Pushing changes and tag...')
  execCommand('git push origin main')
  execCommand(`git push origin v${newVersion}`)

  console.log(`🎉 Successfully released v${newVersion}!`)

  // Output for GitHub Actions
  if (process.env.GITHUB_ACTIONS) {
    // Use the new environment file method instead of deprecated ::set-output
    const githubOutput = process.env.GITHUB_OUTPUT
    if (githubOutput) {
      writeFileSync(githubOutput, `version=${newVersion}\ntag=v${newVersion}\n`, { flag: 'a' })
    }
  }
}

if (import.meta.main) {
  try {
    main()
  }
  catch (error) {
    console.error('❌ Release failed:', error)
    process.exit(1)
  }
}
