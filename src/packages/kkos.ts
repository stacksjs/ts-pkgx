/**
 * **kkos** - pkgx package
 *
 * @domain `github.com/kkos`
 *
 * @install `pkgx github.com/kkos`
 * @name `kkos`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.kkos
 * // Or access via domain
 * const samePkg = pantry.githubcomkkos
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "kkos"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/kkos.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kkosPackage = {
  /**
   * The display name of this package.
   */
  name: 'kkos' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/kkos' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/kkos' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/kkos' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/kkos' as const,
}

export type KkosPackage = typeof kkosPackage
