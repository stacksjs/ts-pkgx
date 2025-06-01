/**
 * **spawn.link** - Crafters of fine Open Source products
 *
 * @domain `spawn.link`
 *
 * @install `pkgx spawn.link`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.spawnlink
 * console.log(pkg.name)        // "spawn.link"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/spawn-link.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const spawnlinkPackage = {
  /**
   * The display name of this package.
   */
  name: 'spawn.link' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/spawn.link/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'spawn.link' as const,
  fullPath: 'spawn.link' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx spawn.link' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SpawnlinkPackage = typeof spawnlinkPackage
