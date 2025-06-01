/**
 * **qhull.org** - Crafters of fine Open Source products
 *
 * @domain `qhull.org`
 *
 * @install `pkgx qhull.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.qhullorg
 * console.log(pkg.name)        // "qhull.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/qhull-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const qhullorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'qhull.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/qhull.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'qhull.org' as const,
  fullPath: 'qhull.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx qhull.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type QhullorgPackage = typeof qhullorgPackage
