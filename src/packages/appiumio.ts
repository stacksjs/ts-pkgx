/**
 * **appium** - Cross-platform automation framework for all kinds of apps, built on top of the W3C WebDriver protocol
 *
 * @domain `appium.io`
 * @programs `appium`
 * @version `3.0.1` (38 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install appium`
 * @name `appium`
 * @dependencies `npmjs.com`, `nodejs.org^10.13.0 || ^12 || ^14 || ^16 || ^18 || ^20`, `openjdk.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.appium
 * // Or access via domain
 * const samePkg = pantry.appiumio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "appium"
 * console.log(pkg.description) // "Cross-platform automation framework for all kin..."
 * console.log(pkg.programs)    // ["appium"]
 * console.log(pkg.versions[0]) // "3.0.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/appium-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const appiumPackage = {
  /**
   * The display name of this package.
   */
  name: 'appium' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'appium.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Cross-platform automation framework for all kinds of apps, built on top of the W3C WebDriver protocol' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/appium.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install appium' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'appium',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'npmjs.com',
    'nodejs.org^10.13.0 || ^12 || ^14 || ^16 || ^18 || ^20',
    'openjdk.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.0.1',
    '2.19.0',
    '2.18.0',
    '2.17.1',
    '2.17.0',
    '2.16.2',
    '2.16.1',
    '2.16.0',
    '2.15.0',
    '2.14.1',
    '2.14.0',
    '2.13.1',
    '2.13.0',
    '2.12.2',
    '2.12.1',
    '2.12.0',
    '2.11.5',
    '2.11.4',
    '2.11.3',
    '2.11.2',
    '2.11.1',
    '2.11.0',
    '2.10.3',
    '2.10.2',
    '2.10.1',
    '2.9.0',
    '2.8.0',
    '2.7.0',
    '2.6.0',
    '2.5.4',
    '2.5.3',
    '2.5.2',
    '2.5.1',
    '2.5.0',
    '2.4.1',
    '2.4.0',
    '2.3.0',
    '2.2.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) appium -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install appium' as const,
}

export type AppiumPackage = typeof appiumPackage
