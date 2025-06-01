/**
 * **mpmath.org** - Crafters of fine Open Source products
 *
 * @domain `mpmath.org`
 *
 * @install `pkgx mpmath.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mpmathorg
 * console.log(pkg.name)        // "mpmath.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mpmath-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mpmathorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'mpmath.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/mpmath.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mpmath.org' as const,
  fullPath: 'mpmath.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx mpmath.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MpmathorgPackage = typeof mpmathorgPackage
