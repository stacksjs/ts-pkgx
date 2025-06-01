/**
 * **tinygo** - Crafters of fine Open Source products
 *
 * @domain `tinygo.org`
 *
 * @install `pkgx tinygo.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tinygoorg
 * console.log(pkg.name)        // "tinygo"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tinygo-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tinygoorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'tinygo' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/tinygo.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tinygo.org' as const,
  fullPath: 'tinygo.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx tinygo.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TinygoorgPackage = typeof tinygoorgPackage
