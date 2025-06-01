/**
 * **epsilon** - Crafters of fine Open Source products
 *
 * @domain `epsilon-project.sourceforge.io`
 *
 * @install `pkgx epsilon-project.sourceforge.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.epsilonprojectsourceforgeio
 * console.log(pkg.name)        // "epsilon"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/epsilon-project-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const epsilonprojectsourceforgeioPackage = {
  /**
   * The display name of this package.
   */
  name: 'epsilon' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/epsilon-project.sourceforge.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'epsilon-project.sourceforge.io' as const,
  fullPath: 'epsilon-project.sourceforge.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx epsilon-project.sourceforge.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type EpsilonprojectsourceforgeioPackage = typeof epsilonprojectsourceforgeioPackage
