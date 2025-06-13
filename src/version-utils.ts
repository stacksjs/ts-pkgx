/**
 * Version resolution utilities for ts-pkgx packages
 */

import type { PackageAlias, PackageDomain, PackageInfo, PackageName, VersionSpec } from './package-types'
import type { Packages } from './packages'
import { packages } from './packages'
import { aliases } from './packages/aliases'

/**
 * Get the latest version of a package (versions[0] is always the latest)
 */
export function getLatestVersion(packageName: PackageName): string | null {
  const domain = resolvePackageDomain(packageName)
  if (!domain)
    return null

  const pkg = packages[domain as keyof Packages]
  if (!pkg || !pkg.versions || pkg.versions.length === 0)
    return null

  return pkg.versions[0] // versions[0] is always the latest
}

/**
 * Get all available versions for a package
 */
export function getAvailableVersions(packageName: PackageName): string[] {
  const domain = resolvePackageDomain(packageName)
  if (!domain)
    return []

  const pkg = packages[domain as keyof Packages]
  if (!pkg || !pkg.versions)
    return []

  return [...pkg.versions] // Return a copy
}

/**
 * Check if a specific version is available for a package
 */
export function isVersionAvailable(packageName: PackageName, version: string): boolean {
  const versions = getAvailableVersions(packageName)
  return versions.includes(version)
}

/**
 * Resolve a version specification to an actual version
 */
export function resolveVersion(packageName: PackageName, versionSpec: VersionSpec = 'latest'): string | null {
  if (versionSpec === 'latest') {
    return getLatestVersion(packageName)
  }

  const versions = getAvailableVersions(packageName)
  if (versions.length === 0)
    return null

  // For exact version matches
  if (versions.includes(versionSpec)) {
    return versionSpec
  }

  // For semver-like patterns, we'll do basic matching
  // This is a simplified implementation - a full semver resolver would be more complex
  if (versionSpec.startsWith('^')) {
    const baseVersion = versionSpec.slice(1)
    const majorVersion = baseVersion.split('.')[0]
    const matchingVersions = versions.filter(v => v.startsWith(`${majorVersion}.`))
    return matchingVersions[0] || null // Return the latest matching version
  }

  if (versionSpec.startsWith('~')) {
    const baseVersion = versionSpec.slice(1)
    const [major, minor] = baseVersion.split('.')
    const prefix = `${major}.${minor}.`
    const matchingVersions = versions.filter(v => v.startsWith(prefix))
    return matchingVersions[0] || null
  }

  if (versionSpec.startsWith('>=')) {
    const minVersion = versionSpec.slice(2)
    // Simple string comparison - in practice you'd want proper semver comparison
    const matchingVersions = versions.filter(v => v >= minVersion)
    return matchingVersions[0] || null
  }

  // For other patterns, return the latest version as fallback
  return getLatestVersion(packageName)
}

/**
 * Get comprehensive package information
 */
export function getPackageInfo(packageName: PackageName): PackageInfo | null {
  const domain = resolvePackageDomain(packageName)
  if (!domain)
    return null

  const pkg = packages[domain as keyof Packages]
  if (!pkg)
    return null

  const latestVersion = getLatestVersion(packageName)
  if (!latestVersion)
    return null

  return {
    name: packageName,
    domain,
    description: pkg.description || '',
    latestVersion,
    totalVersions: pkg.versions?.length || 0,
    programs: [...(pkg.programs || [])],
    dependencies: [...(pkg.dependencies || [])],
    companions: [...(pkg.companions || [])],
    versions: [...(pkg.versions || [])],
  }
}

/**
 * Resolve package name to domain (handles aliases)
 */
export function resolvePackageDomain(packageName: PackageName): string | null {
  // Check if it's an alias first
  if (packageName in aliases) {
    return aliases[packageName as PackageAlias]
  }

  // Check if it's a direct domain
  if (packageName in packages) {
    return packageName
  }

  return null
}

/**
 * Get all packages that match a search term
 */
export function searchPackages(searchTerm: string): PackageInfo[] {
  const results: PackageInfo[] = []
  const lowerSearchTerm = searchTerm.toLowerCase()

  // Search through aliases
  for (const [alias, _domain] of Object.entries(aliases)) {
    if (alias.toLowerCase().includes(lowerSearchTerm)) {
      const info = getPackageInfo(alias as PackageAlias)
      if (info)
        results.push(info)
    }
  }

  // Search through package domains and descriptions
  for (const [domain, pkg] of Object.entries(packages)) {
    if (domain.toLowerCase().includes(lowerSearchTerm)
      || pkg.description?.toLowerCase().includes(lowerSearchTerm)) {
      const info = getPackageInfo(domain as PackageDomain)
      if (info && !results.some(r => r.domain === domain)) {
        results.push(info)
      }
    }
  }

  return results
}

/**
 * Get packages by category based on domain patterns
 */
export function getPackagesByPattern(pattern: RegExp): PackageInfo[] {
  const results: PackageInfo[] = []

  for (const domain of Object.keys(packages)) {
    if (pattern.test(domain)) {
      const info = getPackageInfo(domain as PackageDomain)
      if (info)
        results.push(info)
    }
  }

  return results
}

/**
 * Get popular packages (those with many versions, indicating active development)
 */
export function getPopularPackages(minVersions: number = 10): PackageInfo[] {
  const results: PackageInfo[] = []

  for (const domain of Object.keys(packages)) {
    const info = getPackageInfo(domain as PackageDomain)
    if (info && info.totalVersions >= minVersions) {
      results.push(info)
    }
  }

  // Sort by number of versions (descending)
  return results.sort((a, b) => b.totalVersions - a.totalVersions)
}

/**
 * Get recently updated packages (those with many versions, assuming frequent updates)
 */
export function getActivePackages(limit: number = 50): PackageInfo[] {
  return getPopularPackages(5).slice(0, limit)
}

/**
 * Validate a package specification
 */
export function validatePackageSpec(packageSpec: string): {
  isValid: boolean
  packageName?: PackageName
  version?: string
  error?: string
} {
  try {
    const atIndex = packageSpec.lastIndexOf('@')

    if (atIndex === -1) {
      // No version specified
      const packageName = packageSpec
      const domain = resolvePackageDomain(packageName)

      if (!domain) {
        return {
          isValid: false,
          error: `Unknown package: ${packageName}`,
        }
      }

      return {
        isValid: true,
        packageName: packageName as PackageName,
      }
    }

    const packageName = packageSpec.slice(0, atIndex)
    const version = packageSpec.slice(atIndex + 1)

    const domain = resolvePackageDomain(packageName)
    if (!domain) {
      return {
        isValid: false,
        error: `Unknown package: ${packageName}`,
      }
    }

    if (version === 'latest') {
      return {
        isValid: true,
        packageName: packageName as PackageName,
        version,
      }
    }

    if (!isVersionAvailable(packageName as PackageName, version)) {
      return {
        isValid: false,
        packageName: packageName as PackageName,
        version,
        error: `Version ${version} not available for package ${packageName}`,
      }
    }

    return {
      isValid: true,
      packageName: packageName as PackageName,
      version,
    }
  }
  catch {
    return {
      isValid: false,
      error: `Invalid package specification: ${packageSpec}`,
    }
  }
}
