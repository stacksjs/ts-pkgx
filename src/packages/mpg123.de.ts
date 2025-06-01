/**
 * **mpg123** - Crafters of fine Open Source products
 *
 * @domain `mpg123.de`
 *
 * @install `pkgx mpg123.de`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mpg123de
 * console.log(pkg.name)        // "mpg123"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mpg123-de.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mpg123dePackage = {
  /**
   * The display name of this package.
   */
  name: 'mpg123' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/mpg123.de/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mpg123.de' as const,
  fullPath: 'mpg123.de' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx mpg123.de' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type Mpg123dePackage = typeof mpg123dePackage
