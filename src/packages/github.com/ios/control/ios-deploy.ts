/**
 * **github.com/ios-control/ios-deploy** - pkgx package
 *
 * @domain `github.com/ios/control/ios-deploy`
 *
 * @install `pkgx github.com/ios-control/ios-deploy`
 * @aliases `github.com/ios-control/ios-deploy`, `ios-control/ios-deploy`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomioscontroliosdeploy
 * // Or access via domain
 * const samePkg = pantry.githubcomioscontroliosdeploy
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ios-control"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ios/control/ios-deploy.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomioscontroliosdeployPackage = {
  /**
   * The display name of this package.
   */
  name: 'ios-control' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ios/control/ios-deploy' as const,
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
  installCommand: 'pkgx github.com/ios-control/ios-deploy' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/ios-control/ios-deploy',
    'ios-control/ios-deploy',
  ] as const,
  fullPath: 'github.com/ios-control/ios-deploy' as const,
}

export type GithubcomioscontroliosdeployPackage = typeof githubcomioscontroliosdeployPackage
