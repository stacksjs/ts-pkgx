/**
 * **cython** - Crafters of fine Open Source products
 *
 * @domain `cython.org`
 *
 * @install `pkgx cython.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cythonorg
 * console.log(pkg.name)        // "cython"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cython-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cythonorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'cython' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/cython.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cython.org' as const,
  fullPath: 'cython.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx cython.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CythonorgPackage = typeof cythonorgPackage
