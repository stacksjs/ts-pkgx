import type { PkgxPackage } from '../types'

import { bunshPackage } from './bunsh'
import { denolandPackage } from './denoland'
import { nodejsPackage } from './nodejs'
import { rustlangorgPackage } from './rustlangorg'

// Export all package data
export * from './bunsh'
export * from './denoland'
export * from './fetch'
// Export everything from the fetch module
export * from './nodejs'

/**
 * Map of all available packages
 */
export const pantry: Record<string, PkgxPackage> = {
  'bun.sh': bunshPackage,
  'deno.land': denolandPackage,
  'rust-lang.org': rustlangorgPackage,
  'node.js': nodejsPackage,
}

export * from './rustlangorg'
