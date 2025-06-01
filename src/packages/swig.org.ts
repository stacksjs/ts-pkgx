/**
 * **swig.org** - Crafters of fine Open Source products
 *
 * @domain `swig.org`
 *
 * @install `pkgx swig.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.swigorg
 * console.log(pkg.name)        // "swig.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/swig-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const swigorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'swig.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/swig.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'swig.org' as const,
  fullPath: 'swig.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx swig.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SwigorgPackage = typeof swigorgPackage
