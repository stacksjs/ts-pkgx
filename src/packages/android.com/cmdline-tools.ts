/**
 * **cmdline-tools** - Package from pantry: android.com/cmdline-tools
 *
 * @domain `android.com/cmdline-tools`
 *
 * @install `launchpad install android.com/cmdline-tools`
 * @dependencies `openjdk.org>=17`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.androidcomcmdlinetools
 * console.log(pkg.name)        // "cmdline-tools"
 * console.log(pkg.description) // "Package from pantry: android.com/cmdline-tools"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/android-com/cmdline-tools.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const androidcomcmdlinetoolsPackage = {
  /**
   * The display name of this package.
   */
  name: 'cmdline-tools' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'android.com/cmdline-tools' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: android.com/cmdline-tools' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install android.com/cmdline-tools' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +android.com/cmdline-tools -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install android.com/cmdline-tools' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openjdk.org>=17',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/android.com/cmdline-tools/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type AndroidcomcmdlinetoolsPackage = typeof androidcomcmdlinetoolsPackage
