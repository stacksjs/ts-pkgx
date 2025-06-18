/**
 * **KhronosGroup** - pkgx package
 *
 * @domain `github.com/KhronosGroup`
 *
 * @install `pkgx github.com/KhronosGroup`
 * @name `KhronosGroup`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.KhronosGroup
 * // Or access via domain
 * const samePkg = pantry.githubcomkhronosgroup
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "KhronosGroup"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/KhronosGroup.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const khronosGroupPackage = {
  /**
   * The display name of this package.
   */
  name: 'KhronosGroup' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/KhronosGroup' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/KhronosGroup' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/KhronosGroup' as const,
}

export type KhronosGroupPackage = typeof khronosGroupPackage
