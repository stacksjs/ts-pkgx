/**
 * **freedesktop.org/icon-theme** - pkgx package
 *
 * @domain `freedesktop.org/icon/theme`
 *
 * @install `pkgx freedesktop.org/icon-theme`
 * @name `icon-theme`
 * @aliases `freedesktop.org/icon-theme`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.freedesktoporgicontheme
 * // Or access via domain
 * const samePkg = pantry.freedesktoporgicontheme
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "icon-theme"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/icon/theme.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgiconthemePackage = {
  /**
   * The display name of this package.
   */
  name: 'icon-theme' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/icon/theme' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx freedesktop.org/icon-theme' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'freedesktop.org/icon-theme',
  ] as const,
  fullPath: 'freedesktop.org/icon-theme' as const,
}

export type FreedesktoporgiconthemePackage = typeof freedesktoporgiconthemePackage
