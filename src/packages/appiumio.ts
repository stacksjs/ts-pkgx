/**
 * **appium.io** - Package from pantry: appium.io
 *
 * @domain `appium.io`
 *
 * @install `launchpad install appium.io`
 * @dependencies `npmjs.com`, `nodejs.org^10.13.0 || ^12 || ^14 || ^16 || ^18 || ^20`, `openjdk.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.appiumio
 * console.log(pkg.name)        // "appium.io"
 * console.log(pkg.description) // "Package from pantry: appium.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/appium-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const appiumioPackage = {
  /**
   * The display name of this package.
   */
  name: 'appium.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'appium.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: appium.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install appium.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +appium.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install appium.io' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/appium.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type AppiumioPackage = typeof appiumioPackage
