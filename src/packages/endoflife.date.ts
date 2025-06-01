/**
 * **eol** - Crafters of fine Open Source products
 *
 * @domain `endoflife.date`
 *
 * @install `pkgx endoflife.date`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.endoflifedate
 * console.log(pkg.name)        // "eol"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/endoflife-date.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const endoflifedatePackage = {
  /**
   * The display name of this package.
   */
  name: 'eol' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/endoflife.date/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'endoflife.date' as const,
  fullPath: 'endoflife.date' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx endoflife.date' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type EndoflifedatePackage = typeof endoflifedatePackage
