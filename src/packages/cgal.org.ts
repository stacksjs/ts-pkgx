/**
 * **cgal** - Crafters of fine Open Source products
 *
 * @domain `cgal.org`
 *
 * @install `pkgx cgal.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cgalorg
 * console.log(pkg.name)        // "cgal"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cgal-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cgalorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'cgal' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/cgal.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cgal.org' as const,
  fullPath: 'cgal.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx cgal.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CgalorgPackage = typeof cgalorgPackage
