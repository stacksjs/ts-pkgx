/**
 * **ceres-solver.org** - Crafters of fine Open Source products
 *
 * @domain `ceres-solver.org`
 *
 * @install `pkgx ceres-solver.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ceressolverorg
 * console.log(pkg.name)        // "ceres-solver.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ceres-solver-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ceressolverorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'ceres-solver.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/ceres-solver.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ceres-solver.org' as const,
  fullPath: 'ceres-solver.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx ceres-solver.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CeressolverorgPackage = typeof ceressolverorgPackage
