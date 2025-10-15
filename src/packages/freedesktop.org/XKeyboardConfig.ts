/**
 * **XKeyboardConfig** - pkgx package
 *
 * @domain `freedesktop.org/XKeyboardConfig`
 * @version `2.46.0` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install freedesktop.org/XKeyboardConfig`
 * @dependencies `gnu.org/gettext`, `mesonbuild.com`, `python.org@~3.11`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freedesktoporgxkeyboardconfig
 * console.log(pkg.name)        // "XKeyboardConfig"
 * console.log(pkg.versions[0]) // "2.46.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/XKeyboardConfig.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgxkeyboardconfigPackage = {
  /**
   * The display name of this package.
   */
  name: 'XKeyboardConfig' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/XKeyboardConfig' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/XKeyboardConfig/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install freedesktop.org/XKeyboardConfig' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/XKeyboardConfig -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install freedesktop.org/XKeyboardConfig' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gettext',
    'mesonbuild.com',
    'python.org@~3.11',
    'gnome.org/libxslt',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.46.0',
    '2.45.0',
    '2.44.0',
    '2.43.0',
    '2.42.0',
    '2.41.0',
    '2.40.0',
    '2.39.0',
  ] as const,
  aliases: [] as const,
}

export type FreedesktoporgxkeyboardconfigPackage = typeof freedesktoporgxkeyboardconfigPackage
