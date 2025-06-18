/**
 * **skylot** - pkgx package
 *
 * @domain `github.com/skylot`
 *
 * @install `pkgx github.com/skylot`
 * @name `skylot`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.skylot
 * // Or access via domain
 * const samePkg = pantry.githubcomskylot
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "skylot"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/skylot.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const skylotPackage = {
  /**
   * The display name of this package.
   */
  name: 'skylot' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/skylot' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/skylot' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/skylot' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/skylot' as const,
}

export type SkylotPackage = typeof skylotPackage
