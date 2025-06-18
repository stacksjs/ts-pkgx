/**
 * **gtk-mac-integration-gtk3** - pkgx package
 *
 * @domain `gnome.org/gtk-mac-integration-gtk3`
 * @version `3.0.2` (2 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/gtk-mac-integration-gtk3.md
 *
 * @install `sh <(curl https://pkgx.sh) +gnome.org/gtk-mac-integration-gtk3 -- $SHELL -i`
 * @aliases `gtk-mac-integration-gtk3`
 * @dependencies `gnu.org/gettext`, `gtk.org/gtk3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.gtkmacintegrationgtk3
 * // Or access via domain
 * const samePkg = pantry.gnomeorggtkmacintegrationgtk3
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gnome.org/gtk-mac-integration-gtk3"
 * console.log(pkg.versions[0]) // "3.0.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/gtk-mac-integration-gtk3.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gtkmacintegrationgtk3Package = {
  /**
   * The display name of this package.
   */
  name: 'gnome.org/gtk-mac-integration-gtk3' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnome.org/gtk-mac-integration-gtk3' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/gtk-mac-integration-gtk3/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnome.org/gtk-mac-integration-gtk3 -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gettext',
    'gtk.org/gtk3',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.0.2',
    '3.0.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'gtk-mac-integration-gtk3',
  ] as const,
  fullPath: 'gnome.org/gtk-mac-integration-gtk3' as const,
}

export type Gtkmacintegrationgtk3Package = typeof gtkmacintegrationgtk3Package
