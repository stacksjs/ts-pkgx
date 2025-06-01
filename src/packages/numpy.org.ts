/**
 * **f2py** - Crafters of fine Open Source products
 *
 * @domain `numpy.org`
 *
 * @install `pkgx numpy.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.numpyorg
 * console.log(pkg.name)        // "f2py"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/numpy-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const numpyorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'f2py' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/numpy.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'numpy.org' as const,
  fullPath: 'numpy.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx numpy.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type NumpyorgPackage = typeof numpyorgPackage
