import type { PkgxPackage } from '../types'
import { rustlangorgPackage } from './rustlangorg'
import { abseilioPackage } from './abseilio'
import { akuityioPackage } from './akuityio'
import { acornioPackage } from './acornio'
import { agwanamePackage } from './agwaname'
import { examplecomPackage } from './examplecom'
import { agwanamegitcryptPackage } from './agwanamegitcrypt'
import { agptcoPackage } from './agptco'
import { nodejsorgPackage } from './nodejsorg'
import { nodejsPackage } from './nodejs'
import { amber-langcomPackage } from './amber-langcom'
import { bunshPackage } from './bunsh'
import { denolandPackage } from './denoland'
import { godevPackage } from './godev'
import { alsa-projectorgPackage } from './alsa-projectorg'

export const pantry: Record<string, PkgxPackage> = {}

// Export everything from fetch.ts
export * from './fetch'

// Export specific packages
export * from './rustlangorg'
export * from './abseilio'
export * from './akuityio'
export * from './acornio'
export * from './agwaname'
export * from './examplecom'
export * from './agwanamegitcrypt'
export * from './agptco'
export * from './nodejsorg'
export * from './nodejs'
export * from './amber-langcom'
export * from './bunsh'
export * from './denoland'
export * from './godev'
export * from './alsa-projectorg'

// Add package mappings to pantry
// Add direct domain mappings
pantry['rustlang.org'] = rustlangorgPackage
pantry['abseil.io'] = abseilioPackage
pantry['akuity.io'] = akuityioPackage
pantry['acorn.io'] = acornioPackage
pantry['agwaname'] = agwanamePackage
pantry['example.com'] = examplecomPackage
pantry['agwa.name'] = agwanamegitcryptPackage
pantry['agptco'] = agptcoPackage
pantry['nodejs.org'] = nodejsorgPackage
pantry['nodejs'] = nodejsPackage
pantry['amber/langcom'] = amber-langcomPackage
pantry['bun.sh'] = bunshPackage
pantry['deno.land'] = denolandPackage
pantry['go.dev'] = godevPackage
pantry['alsa/projectorg'] = alsa-projectorgPackage

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