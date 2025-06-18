/**
 * **cloudbase** - pkgx package
 *
 * @domain `github.com/cloudbase`
 *
 * @install `pkgx github.com/cloudbase`
 * @name `cloudbase`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cloudbase
 * // Or access via domain
 * const samePkg = pantry.githubcomcloudbase
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cloudbase"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/cloudbase.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cloudbasePackage = {
  /**
   * The display name of this package.
   */
  name: 'cloudbase' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/cloudbase' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/cloudbase' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/cloudbase' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/cloudbase' as const,
}

export type CloudbasePackage = typeof cloudbasePackage
