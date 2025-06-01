/**
 * **rioterm.com** - Crafters of fine Open Source products
 *
 * @domain `rioterm.com`
 *
 * @install `pkgx rioterm.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.riotermcom
 * console.log(pkg.name)        // "rioterm.com"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rioterm-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const riotermcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'rioterm.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/rioterm.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rioterm.com' as const,
  fullPath: 'rioterm.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx rioterm.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type RiotermcomPackage = typeof riotermcomPackage
