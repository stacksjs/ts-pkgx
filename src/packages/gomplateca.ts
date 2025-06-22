/**
 * **gomplate** - A flexible commandline tool for template rendering. Supports lots of local and remote datasources.
 *
 * @domain `gomplate.ca`
 * @programs `gomplate`
 * @version `4.3.2` (11 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install gomplate`
 * @name `gomplate`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gomplate
 * // Or access via domain
 * const samePkg = pantry.gomplateca
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gomplate"
 * console.log(pkg.description) // "A flexible commandline tool for template render..."
 * console.log(pkg.programs)    // ["gomplate"]
 * console.log(pkg.versions[0]) // "4.3.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gomplate-ca.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gomplatePackage = {
  /**
   * The display name of this package.
   */
  name: 'gomplate' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gomplate.ca' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A flexible commandline tool for template rendering. Supports lots of local and remote datasources.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gomplate.ca/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gomplate' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gomplate',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.3.2',
    '4.3.1',
    '4.3.0',
    '4.2.0',
    '4.1.0',
    '4.0.1',
    '4.0.0',
    '3.11.8',
    '3.11.7',
    '3.11.6',
    '3.11.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) gomplate -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gomplate' as const,
}

export type GomplatePackage = typeof gomplatePackage
