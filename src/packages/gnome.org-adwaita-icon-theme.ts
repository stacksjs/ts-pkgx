/**
 * **adwaita-icon-theme** - pkgx package
 *
 * @domain `gnome.org/adwaita-icon-theme`
 * @version `48.1.0` (6 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/adwaita-icon-theme.md
 *
 * @install `sh <(curl https://pkgx.sh) +gnome.org/adwaita-icon-theme -- $SHELL -i`
 * @aliases `adwaita-icon-theme`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.adwaitaicontheme
 * // Or access via domain
 * const samePkg = pantry.gnomeorgadwaitaicontheme
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gnome.org/adwaita-icon-theme"
 * console.log(pkg.versions[0]) // "48.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/adwaita-icon-theme.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const adwaitaiconthemePackage = {
  /**
   * The display name of this package.
   */
  name: 'gnome.org/adwaita-icon-theme' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnome.org/adwaita-icon-theme' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/adwaita-icon-theme/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnome.org/adwaita-icon-theme -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '48.1.0',
    '48.0.0',
    '47.0.0',
    '46.2.0',
    '46.0.0',
    '45.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'adwaita-icon-theme',
  ] as const,
  fullPath: 'gnome.org/adwaita-icon-theme' as const,
}

export type AdwaitaiconthemePackage = typeof adwaitaiconthemePackage
