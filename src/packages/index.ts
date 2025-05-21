import type { PkgxPackage } from '../types'
import { rustlangorgPackage } from './rustlangorg'
import { abseilioPackage } from './abseilio'
import { acornioPackage } from './acornio'
import { examplecomPackage } from './examplecom'
import { agwanamegitcryptPackage } from './agwanamegitcrypt'
import { nodejsPackage } from './nodejs'
import { bunshPackage } from './bunsh'
import { denolandPackage } from './denoland'

export const pantry: Record<string, PkgxPackage> = {}

// Export everything from fetch.ts
export * from './fetch'

// Export specific packages
export * from './rustlangorg'
export * from './abseilio'
export * from './acornio'
export * from './examplecom'
export * from './agwanamegitcrypt'
export * from './nodejs'
export * from './bunsh'
export * from './denoland'

// Add package mappings to pantry
// Add direct domain mappings
pantry['rustlang.org'] = rustlangorgPackage
pantry['abseil.io'] = abseilioPackage
pantry['acorn.io'] = acornioPackage
pantry['example.com'] = examplecomPackage
pantry['agwa.name'] = agwanamegitcryptPackage
pantry['nodejs'] = nodejsPackage
pantry['bun.sh'] = bunshPackage
pantry['deno.land'] = denolandPackage

// Add full path mappings for nested packages
pantry['agwa.name/git-crypt'] = agwanamegitcryptPackage // Nested path mapping

/**
 * Get a package by name, supporting both full domain and aliases
 */
export function getPackage(name: string): PkgxPackage | undefined {
  // Direct lookup
  if (pantry[name]) {
    return pantry[name]
  }

  // Check aliases - loop through all packages
  for (const pkg of Object.values(pantry)) {
    // Check if this package has the name as an alias
    if (pkg.aliases && pkg.aliases.includes(name)) {
      return pkg
    }
  }

  return undefined
}