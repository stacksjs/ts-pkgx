/**
 * **aux4** - Crafters of fine Open Source products
 *
 * @domain `aux4.io`
 *
 * @install `pkgx aux4.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.aux4io
 * console.log(pkg.name)        // "aux4"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/aux4-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const aux4ioPackage = {
  /**
   * The display name of this package.
   */
  name: 'aux4' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/aux4.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'aux4.io' as const,
  fullPath: 'aux4.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx aux4.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type Aux4ioPackage = typeof aux4ioPackage
