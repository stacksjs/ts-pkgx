/**
 * **gtk3** - Toolkit for creating graphical user interfaces
 *
 * @domain `gtk.org/gtk3`
 * @programs `gtk-builder-tool`, `gtk-encode-symbolic-svg`, `gtk-launch`, `gtk-query-immodules-3.0`, `gtk-query-settings`, ... (+5 more)
 * @version `3.24.38` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +gtk.org/gtk3 -- $SHELL -i`
 * @name `gtk3`
 * @dependencies `gnome.org/atk`, `gnome.org/gdk-pixbuf`, `gnome.org/glib`, ... (+27 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gtk3
 * // Or access via domain
 * const samePkg = pantry.gtkorggtk3
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gtk3"
 * console.log(pkg.description) // "Toolkit for creating graphical user interfaces"
 * console.log(pkg.programs)    // ["gtk-builder-tool", "gtk-encode-symbolic-svg", ...]
 * console.log(pkg.versions[0]) // "3.24.38" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gtk-org/gtk3.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gtk3Package = {
  /**
   * The display name of this package.
   */
  name: 'gtk3' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gtk.org/gtk3' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Toolkit for creating graphical user interfaces' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gtk.org/gtk3/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +gtk.org/gtk3 -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gtk-builder-tool',
    'gtk-encode-symbolic-svg',
    'gtk-launch',
    'gtk-query-immodules-3.0',
    'gtk-query-settings',
    'gtk-update-icon-cache',
    'gtk3-demo',
    'gtk3-demo-application',
    'gtk3-icon-browser',
    'gtk3-widget-factory',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/atk',
    'gnome.org/gdk-pixbuf',
    'gnome.org/glib',
    'gnome.org/gsettings-desktop-schemas',
    'freedesktop.org/icon-theme',
    'github.com/anholt/libepoxy',
    'gnome.org/pango',
    'gnome.org/libxslt',
    'x.org/x11',
    'x.org/exts',
    'x.org/xrender',
    'x.org/xrandr',
    'x.org/xi',
    'ebassi.github.io/graphene',
    'xkbcommon.org',
    'debian.org/iso-codes',
    'freedesktop.org/at-spi2-atk',
    'cairographics.org',
    'wayland.freedesktop.org/protocols',
    'x.org/protocol',
    'openprinting.github.io/cups',
    'docbook.org',
    'docbook.org/xsl',
    'gnu.org/gettext',
    'gnome.org/gobject-introspection',
    'mesonbuild.com',
    'ninja-build.org',
    'freedesktop.org/pkg-config',
    'cmake.org',
    'freedesktop.org/pkg-config',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.24.38',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type Gtk3Package = typeof gtk3Package
