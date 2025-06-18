/**
 * **cpburnz** - pkgx package
 *
 * @domain `github.com/cpburnz`
 *
 * @install `pkgx github.com/cpburnz`
 * @name `cpburnz`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cpburnz
 * // Or access via domain
 * const samePkg = pantry.githubcomcpburnz
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cpburnz"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/cpburnz.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cpburnzPackage = {
  /**
   * The display name of this package.
   */
  name: 'cpburnz' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/cpburnz' as const,
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
  installCommand: 'pkgx github.com/cpburnz' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/cpburnz' as const,
}

export type CpburnzPackage = typeof cpburnzPackage
