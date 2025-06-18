/**
 * **vburenin** - pkgx package
 *
 * @domain `github.com/vburenin`
 *
 * @install `pkgx github.com/vburenin`
 * @name `vburenin`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.vburenin
 * // Or access via domain
 * const samePkg = pantry.githubcomvburenin
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "vburenin"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/vburenin.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vbureninPackage = {
  /**
   * The display name of this package.
   */
  name: 'vburenin' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/vburenin' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/vburenin' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/vburenin' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/vburenin' as const,
}

export type VbureninPackage = typeof vbureninPackage
