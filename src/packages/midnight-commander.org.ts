/**
 * **Midnight** - Crafters of fine Open Source products
 *
 * @domain `midnight-commander.org`
 *
 * @install `pkgx midnight-commander.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.midnightcommanderorg
 * console.log(pkg.name)        // "Midnight"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/midnight-commander-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const midnightcommanderorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'Midnight' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/midnight-commander.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'midnight-commander.org' as const,
  fullPath: 'midnight-commander.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx midnight-commander.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MidnightcommanderorgPackage = typeof midnightcommanderorgPackage
