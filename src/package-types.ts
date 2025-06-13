/**
 * Comprehensive TypeScript types and utilities for ts-pkgx
 */

import type { Packages, Pantry } from './packages'
import process from 'node:process'
import { aliases } from './packages/aliases'

// Extract all package alias names from ts-pkgx
export type PackageAlias = keyof typeof aliases

// Extract all package domain names from ts-pkgx packages
export type PackageDomain = keyof Packages

// Union type of all valid package identifiers (aliases + domains)
export type PackageName = PackageAlias | PackageDomain

// Type for package with optional version specification
export type PackageSpec = `${PackageName}` | `${PackageName}@${string}`

// Supported distribution formats
export type SupportedFormat = 'tar.xz' | 'tar.gz' | 'zip' | 'dmg' | 'pkg' | 'msi' | 'deb' | 'rpm'

// Supported platforms
export type SupportedPlatform = 'darwin' | 'linux' | 'windows'

// Supported architectures
export type SupportedArchitecture = 'x86_64' | 'aarch64' | 'armv7l' | 'i686'

// Version specification types
export type VersionSpec =
  | 'latest'
  | `^${string}`
  | `~${string}`
  | `>=${string}`
  | `<=${string}`
  | `>${string}`
  | `<${string}`
  | `=${string}`
  | string

// Package information interface
export interface PackageInfo {
  name: string
  domain: string
  description: string
  latestVersion: string
  totalVersions: number
  programs: string[]
  dependencies: string[]
  companions: string[]
  versions: string[]
}

// Package resolution result
export interface PackageResolution {
  originalName: string
  resolvedDomain: string
  isAlias: boolean
  version?: string
}

// Package specification parsing result
export interface ParsedPackageSpec {
  name: string
  version?: string
  versionSpec?: VersionSpec
}

// Platform detection result
export interface PlatformInfo {
  platform: SupportedPlatform
  architecture: SupportedArchitecture
  isSupported: boolean
}

// Package installation context
export interface InstallationContext {
  packageName: PackageName
  version: string
  platform: SupportedPlatform
  architecture: SupportedArchitecture
  format: SupportedFormat
}

// Type guards
export function isPackageAlias(name: string): name is PackageAlias {
  return name in aliases
}

export function isPackageDomain(name: string): name is PackageDomain {
  // This would need to be implemented with the actual packages object
  // For now, we'll use a simple check
  return name.includes('.')
}

export function isValidPackageName(name: string): name is PackageName {
  return isPackageAlias(name) || isPackageDomain(name)
}

export function isSupportedPlatform(platform: string): platform is SupportedPlatform {
  return ['darwin', 'linux', 'windows'].includes(platform)
}

export function isSupportedArchitecture(arch: string): arch is SupportedArchitecture {
  return ['x86_64', 'aarch64', 'armv7l', 'i686'].includes(arch)
}

// Utility functions
export function getAllPackageAliases(): PackageAlias[] {
  return Object.keys(aliases) as PackageAlias[]
}

export function getAllPackageDomains(): PackageDomain[] {
  // This would need to be implemented with the actual packages object
  // For now, return the values from aliases as they are domains
  return Object.values(aliases) as PackageDomain[]
}

export function resolvePackageName(name: string): PackageResolution {
  if (isPackageAlias(name)) {
    return {
      originalName: name,
      resolvedDomain: aliases[name],
      isAlias: true,
    }
  }

  return {
    originalName: name,
    resolvedDomain: name,
    isAlias: false,
  }
}

export function parsePackageSpec(spec: string): ParsedPackageSpec {
  const atIndex = spec.lastIndexOf('@')

  if (atIndex === -1) {
    return { name: spec }
  }

  const name = spec.slice(0, atIndex)
  const version = spec.slice(atIndex + 1)

  return {
    name,
    version,
    versionSpec: version as VersionSpec,
  }
}

export function formatPackageSpec(name: PackageName, version?: string): PackageSpec {
  return version ? `${name}@${version}` : name
}

export function detectPlatform(): PlatformInfo {
  const platform = process.platform
  const arch = process.arch

  let supportedPlatform: SupportedPlatform
  let supportedArch: SupportedArchitecture
  let isSupported = true

  switch (platform) {
    case 'darwin':
      supportedPlatform = 'darwin'
      break
    case 'linux':
      supportedPlatform = 'linux'
      break
    case 'win32':
      supportedPlatform = 'windows'
      break
    default:
      supportedPlatform = 'linux' // fallback
      isSupported = false
  }

  switch (arch) {
    case 'x64':
      supportedArch = 'x86_64'
      break
    case 'arm64':
      supportedArch = 'aarch64'
      break
    case 'arm':
      supportedArch = 'armv7l'
      break
    case 'ia32':
      supportedArch = 'i686'
      break
    default:
      supportedArch = 'x86_64' // fallback
      isSupported = false
  }

  return {
    platform: supportedPlatform,
    architecture: supportedArch,
    isSupported,
  }
}

export function createInstallationContext(
  packageName: PackageName,
  version: string = 'latest',
  platformInfo?: PlatformInfo,
): InstallationContext {
  const platform = platformInfo || detectPlatform()

  // Determine the best format for the platform
  let format: SupportedFormat
  switch (platform.platform) {
    case 'darwin':
      format = 'tar.xz'
      break
    case 'linux':
      format = 'tar.xz'
      break
    case 'windows':
      format = 'zip'
      break
    default:
      format = 'tar.xz'
  }

  return {
    packageName,
    version,
    platform: platform.platform,
    architecture: platform.architecture,
    format,
  }
}

// Constants for common version specifications
export const VERSION_SPECS = {
  LATEST: 'latest' as const,
  ANY: '*' as const,
} as const

// Constants for common package categories
export const PACKAGE_CATEGORIES = {
  RUNTIME: ['nodejs.org', 'python.org', 'go.dev', 'rust-lang.org'] as const,
  BUILD_TOOLS: ['cmake.org', 'ninja-build.org', 'gradle.org', 'maven.apache.org'] as const,
  DATABASES: ['postgresql.org', 'mysql.com', 'redis.io', 'mongodb.com'] as const,
  EDITORS: ['neovim.io', 'vim.org', 'code.visualstudio.com'] as const,
  CLI_TOOLS: ['cli.github.com', 'curl.se', 'wget.gnu.org', 'jq.dev'] as const,
} as const

// Helper to get packages by category
export function getPackagesByCategory(category: keyof typeof PACKAGE_CATEGORIES): readonly string[] {
  return PACKAGE_CATEGORIES[category]
}

// Helper to check if a package is in a specific category
export function isPackageInCategory(packageName: string, category: keyof typeof PACKAGE_CATEGORIES): boolean {
  const categoryPackages = PACKAGE_CATEGORIES[category]
  return (categoryPackages as readonly string[]).includes(packageName)
}
