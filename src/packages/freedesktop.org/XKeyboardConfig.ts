/**
 * **freedesktop.org/xkeyboardconfig** - pkgx package
 *
 * @domain `freedesktop.org/XKeyboardConfig`
 * @version `2.45.0` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +freedesktop.org/XKeyboardConfig -- $SHELL -i`
 * @aliases `freedesktop.org/xkeyboardconfig`, `XKeyboardConfig`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.freedesktoporgxkeyboardconfig
 * // Or access via domain
 * const samePkg = pantry.freedesktoporgxkeyboardconfig
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "freedesktop.org/XKeyboardConfig"
 * console.log(pkg.versions[0]) // "2.45.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/XKeyboardConfig.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgxkeyboardconfigPackage = {
  /**
   * The display name of this package.
   */
  name: 'freedesktop.org/XKeyboardConfig' as const,
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
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/XKeyboardConfig -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.45.0',
    '2.44.0',
    '2.43.0',
    '2.42.0',
    '2.41.0',
    '2.40.0',
    '2.39.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'freedesktop.org/xkeyboardconfig',
    'XKeyboardConfig',
  ] as const,
  fullPath: 'freedesktop.org/XKeyboardConfig' as const,
}

export type FreedesktoporgxkeyboardconfigPackage = typeof freedesktoporgxkeyboardconfigPackage
