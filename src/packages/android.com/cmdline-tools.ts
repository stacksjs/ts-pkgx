/**
 * **cmdline-tools** - pkgx package
 *
 * @domain `android.com/cmdline-tools`
 * @programs `apkanalyzer`, `avdmanager`, `lint`, `profgen`, `resourceshrinker`, ... (+3 more)
 * @version `13114758.0.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +android.com/cmdline-tools -- $SHELL -i`
 * @dependencies `openjdk.org>=17`, `info-zip.org/unzip`, `curl.se`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.androidcomcmdlinetools
 * console.log(pkg.name)        // "cmdline-tools"
 * console.log(pkg.programs)    // ["apkanalyzer", "avdmanager", ...]
 * console.log(pkg.versions[0]) // "13114758.0.0" (latest)
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
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/android.com/cmdline-tools/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +android.com/cmdline-tools -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'apkanalyzer',
    'avdmanager',
    'lint',
    'profgen',
    'resourceshrinker',
    'retrace',
    'screenshot2',
    'sdkmanager',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openjdk.org>=17',
    'info-zip.org/unzip',
    'curl.se',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '13114758.0.0',
    '11076708.0.0',
  ] as const,
  aliases: [] as const,
}

export type AndroidcomcmdlinetoolsPackage = typeof androidcomcmdlinetoolsPackage
