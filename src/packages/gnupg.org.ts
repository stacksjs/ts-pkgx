/**
 * **gnupg.org** - Crafters of fine Open Source products
 *
 * @domain `gnupg.org`
 *
 * @install `pkgx gnupg.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnupgorg
 * console.log(pkg.name)        // "gnupg.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnupg-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnupgorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnupg.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/gnupg.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnupg.org' as const,
  fullPath: 'gnupg.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx gnupg.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GnupgorgPackage = typeof gnupgorgPackage
