/**
 * **Scryer** - Crafters of fine Open Source products
 *
 * @domain `scryer.pl`
 *
 * @install `pkgx scryer.pl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.scryerpl
 * console.log(pkg.name)        // "Scryer"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/scryer-pl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const scryerplPackage = {
  /**
   * The display name of this package.
   */
  name: 'Scryer' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/scryer.pl/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'scryer.pl' as const,
  fullPath: 'scryer.pl' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx scryer.pl' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ScryerplPackage = typeof scryerplPackage
