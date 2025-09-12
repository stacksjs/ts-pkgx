/**
 * **sing-box** - The universal proxy platform
 *
 * @domain `sing-box.app`
 * @programs `sing-box`
 * @version `1.12.7` (61 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install sing-box`
 * @name `sing-box`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.singbox
 * // Or access via domain
 * const samePkg = pantry.singboxapp
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sing-box"
 * console.log(pkg.description) // "The universal proxy platform"
 * console.log(pkg.programs)    // ["sing-box"]
 * console.log(pkg.versions[0]) // "1.12.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sing-box-app.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const singboxPackage = {
  /**
   * The display name of this package.
   */
  name: 'sing-box' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sing-box.app' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The universal proxy platform' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sing-box.app/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sing-box' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'sing-box',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.12.7',
    '1.12.6',
    '1.12.5',
    '1.12.4',
    '1.12.3',
    '1.12.2',
    '1.12.1',
    '1.12.0',
    '1.11.15',
    '1.11.14',
    '1.11.13',
    '1.11.12',
    '1.11.11',
    '1.11.10',
    '1.11.9',
    '1.11.8',
    '1.11.7',
    '1.11.6',
    '1.11.5',
    '1.11.4',
    '1.11.3',
    '1.11.2',
    '1.11.1',
    '1.11.0',
    '1.10.7',
    '1.10.6',
    '1.10.5',
    '1.10.4',
    '1.10.3',
    '1.10.2',
    '1.10.1',
    '1.10.0',
    '1.9.7',
    '1.9.6',
    '1.9.5',
    '1.9.4',
    '1.9.3',
    '1.9.2',
    '1.9.1',
    '1.9.0',
    '1.8.14',
    '1.8.13',
    '1.8.12',
    '1.8.11',
    '1.8.10',
    '1.8.9',
    '1.8.8',
    '1.8.7',
    '1.8.6',
    '1.8.5',
    '1.8.4',
    '1.8.2',
    '1.8.1',
    '1.8.0',
    '1.7.8',
    '1.7.7',
    '1.7.6',
    '1.7.5',
    '1.7.4',
    '1.7.3',
    '1.7.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) sing-box -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install sing-box' as const,
}

export type SingboxPackage = typeof singboxPackage
