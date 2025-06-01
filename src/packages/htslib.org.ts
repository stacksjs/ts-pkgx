/**
 * **htslib.org** - Crafters of fine Open Source products
 *
 * @domain `htslib.org`
 *
 * @install `pkgx htslib.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.htsliborg
 * console.log(pkg.name)        // "htslib.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/htslib-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const htsliborgPackage = {
  /**
   * The display name of this package.
   */
  name: 'htslib.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/htslib.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'htslib.org' as const,
  fullPath: 'htslib.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx htslib.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type HtsliborgPackage = typeof htsliborgPackage
