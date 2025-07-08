/**
 * **ios-deploy** - Install and debug iPhone apps from the command line, without using Xcode
 *
 * @domain `github.com/ios-control/ios-deploy`
 * @programs `ios-deploy`
 * @version `1.12.2` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install ios-deploy`
 * @name `ios-deploy`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.iosdeploy
 * // Or access via domain
 * const samePkg = pantry.githubcomioscontroliosdeploy
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ios-deploy"
 * console.log(pkg.description) // "Install and debug iPhone apps from the command ..."
 * console.log(pkg.programs)    // ["ios-deploy"]
 * console.log(pkg.versions[0]) // "1.12.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ios-control/ios-deploy.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const iosdeployPackage = {
  /**
   * The display name of this package.
   */
  name: 'ios-deploy' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ios-control/ios-deploy' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Install and debug iPhone apps from the command line, without using Xcode' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/ios-control/ios-deploy/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/ios-control/ios-deploy' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ios-deploy' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ios-deploy',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.12.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) ios-deploy -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install ios-deploy' as const,
}

export type IosdeployPackage = typeof iosdeployPackage
