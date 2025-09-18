/**
 * **cf** - Filter to replace numeric timestamps with a formatted date time
 *
 * @domain `cloudfoundry.org/cf-cli`
 * @programs `cf`
 * @version `8.16.0` (31 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install cf`
 * @name `cf`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cf
 * // Or access via domain
 * const samePkg = pantry.cloudfoundryorgcfcli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cf"
 * console.log(pkg.description) // "Filter to replace numeric timestamps with a for..."
 * console.log(pkg.programs)    // ["cf"]
 * console.log(pkg.versions[0]) // "8.16.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cloudfoundry-org/cf-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cfPackage = {
  /**
   * The display name of this package.
   */
  name: 'cf' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cloudfoundry.org/cf-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Filter to replace numeric timestamps with a formatted date time' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cloudfoundry.org/cf-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cf' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cf',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '8.16.0',
    '8.14.1',
    '8.14.0',
    '8.13.0',
    '8.12.0',
    '8.11.0',
    '8.10.0',
    '8.9.0',
    '8.8.3',
    '8.8.2',
    '8.8.1',
    '8.8.0',
    '8.7.11',
    '8.7.10',
    '8.7.9',
    '8.7.8',
    '8.7.7',
    '8.7.6',
    '8.7.5',
    '8.7.4',
    '7.8.0',
    '7.7.15',
    '7.7.14',
    '7.7.12',
    '7.7.11',
    '7.7.10',
    '7.7.9',
    '7.7.8',
    '7.7.7',
    '7.7.6',
    '7.7.5',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) cf -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cf' as const,
}

export type CfPackage = typeof cfPackage
