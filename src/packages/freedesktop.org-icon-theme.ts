/**
 * **icon-theme** - pkgx package
 *
 * @domain `freedesktop.org/icon-theme`
 * @version `0.18.0` (2 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/icon-theme.md
 *
 * @install `sh <(curl https://pkgx.sh) +freedesktop.org/icon-theme -- $SHELL -i`
 * @aliases `icon-theme`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.icontheme
 * // Or access via domain
 * const samePkg = pantry.freedesktoporgicontheme
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "freedesktop.org/icon-theme"
 * console.log(pkg.versions[0]) // "0.18.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/icon-theme.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const iconthemePackage = {
  /**
   * The display name of this package.
   */
  name: 'freedesktop.org/icon-theme' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/icon-theme' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/icon-theme/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/icon-theme -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.18.0',
    '0.17.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'icon-theme',
  ] as const,
  fullPath: 'freedesktop.org/icon-theme' as const,
}

export type IconthemePackage = typeof iconthemePackage
