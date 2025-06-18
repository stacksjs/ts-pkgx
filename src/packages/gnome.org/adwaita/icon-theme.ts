/**
 * **gnome.org/adwaita-icon-theme** - pkgx package
 *
 * @domain `gnome.org/adwaita/icon-theme`
 *
 * @install `pkgx gnome.org/adwaita-icon-theme`
 * @name `adwaita-icon-theme`
 * @aliases `gnome.org/adwaita-icon-theme`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.gnomeorgadwaitaicontheme
 * // Or access via domain
 * const samePkg = pantry.gnomeorgadwaitaicontheme
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "adwaita-icon-theme"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/adwaita/icon-theme.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnomeorgadwaitaiconthemePackage = {
  /**
   * The display name of this package.
   */
  name: 'adwaita-icon-theme' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnome.org/adwaita/icon-theme' as const,
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
  installCommand: 'pkgx gnome.org/adwaita-icon-theme' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'gnome.org/adwaita-icon-theme',
  ] as const,
  fullPath: 'gnome.org/adwaita-icon-theme' as const,
}

export type GnomeorgadwaitaiconthemePackage = typeof gnomeorgadwaitaiconthemePackage
