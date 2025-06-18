/**
 * **adwaita-icon-theme** - pkgx package
 *
 * @domain `gnome.org/adwaita-icon-theme`
 * @version `48.1.0` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +gnome.org/adwaita-icon-theme -- $SHELL -i`
 * @dependencies `gnu.org/gettext`, `gtk.org/gtk4`, `freedesktop.org/intltool`, ... (+3 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnomeorgadwaitaicontheme
 * console.log(pkg.name)        // "adwaita-icon-theme"
 * console.log(pkg.versions[0]) // "48.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/adwaita-icon-theme.md
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
  installCommand: 'launchpad install +gnome.org/adwaita-icon-theme -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gettext',
    'gtk.org/gtk4',
    'freedesktop.org/intltool',
    'mesonbuild.com',
    'ninja-build.org',
    'freedesktop.org/pkg-config',
  ] as const,
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
  aliases: [] as const,
}

export type GnomeorgadwaitaiconthemePackage = typeof gnomeorgadwaitaiconthemePackage
