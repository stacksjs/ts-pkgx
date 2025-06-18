/**
 * **ios-control** - pkgx package
 *
 * @domain `github.com/ios-control`
 *
 * @install `pkgx github.com/ios-control`
 * @name `ios-control`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ioscontrol
 * // Or access via domain
 * const samePkg = pantry.githubcomioscontrol
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ios-control"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ios-control.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ioscontrolPackage = {
  /**
   * The display name of this package.
   */
  name: 'ios-control' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ios-control' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/ios-control' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/ios-control' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/ios-control' as const,
}

export type IoscontrolPackage = typeof ioscontrolPackage
