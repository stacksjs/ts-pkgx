import { describe, expect, it } from 'bun:test'
import fs from 'node:fs'
import path from 'node:path'
import { fetchAndSaveAllPackages, fetchPkgxPackage } from '../src/packages/fetch'

// Set longer timeouts for these tests - Playwright operations can take time
const TEST_TIMEOUT = 120000 // 2 minutes

describe('Package Fetching', () => {
  it('should fetch a single package', async () => {
    const packageInfo = await fetchPkgxPackage('node')

    expect(packageInfo).toBeDefined()
    expect(packageInfo.name).toBe('node')
    expect(packageInfo.installCommand).toBeDefined()
    expect(packageInfo.description).toBeDefined()
  })

  it('should fetch and save all packages', async () => {
    const savedPackages = await fetchAndSaveAllPackages({
      timeout: TEST_TIMEOUT, // Give it more time since we're fetching all packages
    })

    expect(savedPackages.length).toBeGreaterThan(0)

    // Verify that files were created
    const packagesDir = path.join(process.cwd(), 'packages')

    expect(fs.existsSync(packagesDir)).toBe(true)

    const files = fs.readdirSync(packagesDir)
    expect(files.length).toBeGreaterThan(0)
    expect(files.every((file: string) => file.endsWith('.json'))).toBe(true)
  })
})
