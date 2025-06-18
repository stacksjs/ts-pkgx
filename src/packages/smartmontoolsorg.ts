/**
 * **smartmontools.org** - SMART hard drive monitoring
 *
 * @domain `smartmontools.org`
 * @programs `smartctl`, `smartd`
 * @version `7.5.0` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +smartmontools.org -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.smartmontoolsorg
 * console.log(pkg.name)        // "smartmontools.org"
 * console.log(pkg.description) // "SMART hard drive monitoring"
 * console.log(pkg.programs)    // ["smartctl", "smartd"]
 * console.log(pkg.versions[0]) // "7.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/smartmontools-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const smartmontoolsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'smartmontools.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'smartmontools.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'SMART hard drive monitoring' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/smartmontools.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +smartmontools.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'smartctl',
    'smartd',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '7.5.0',
    '7.4.0',
    '7.3.0',
  ] as const,
  aliases: [] as const,
}

export type SmartmontoolsorgPackage = typeof smartmontoolsorgPackage
