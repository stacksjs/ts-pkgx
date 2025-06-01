/**
 * **fltk.org** - Crafters of fine Open Source products
 *
 * @domain `fltk.org`
 *
 * @install `pkgx fltk.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.fltkorg
 * console.log(pkg.name)        // "fltk.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fltk-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fltkorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'fltk.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/fltk.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fltk.org' as const,
  fullPath: 'fltk.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx fltk.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type FltkorgPackage = typeof fltkorgPackage
