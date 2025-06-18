/**
 * **gtk4** - Toolkit for creating graphical user interfaces
 *
 * @domain `gtk.org/gtk4`
 * @programs `gtk4-builder-tool`, `gtk4-demo`, `gtk4-demo-application`, `gtk4-encode-symbolic-svg`, `gtk4-launch`, ... (+6 more)
 * @version `4.19.1` (45 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +gtk.org/gtk4 -- $SHELL -i`
 * @name `gtk4`
 * @dependencies `gnome.org/gdk-pixbuf^2.42`, `gnome.org/glib^2.78`, `ebassi.github.io/graphene^1.10`, ... (+16 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gtk4
 * // Or access via domain
 * const samePkg = pantry.gtkorggtk4
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gtk4"
 * console.log(pkg.description) // "Toolkit for creating graphical user interfaces"
 * console.log(pkg.programs)    // ["gtk4-builder-tool", "gtk4-demo", ...]
 * console.log(pkg.versions[0]) // "4.19.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gtk-org/gtk4.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gtk4Package = {
  /**
   * The display name of this package.
   */
  name: 'gtk4' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gtk.org/gtk4' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Toolkit for creating graphical user interfaces' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gtk.org/gtk4/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gtk.org/gtk4 -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gtk4-builder-tool',
    'gtk4-demo',
    'gtk4-demo-application',
    'gtk4-encode-symbolic-svg',
    'gtk4-launch',
    'gtk4-node-editor',
    'gtk4-query-settings',
    'gtk4-print-editor',
    'gtk4-rendernode-tool',
    'gtk4-update-icon-cache',
    'gtk4-widget-factory',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/gdk-pixbuf^2.42',
    'gnome.org/glib^2.78',
    'ebassi.github.io/graphene^1.10',
    'freedesktop.org/icon-theme^0.17',
    'libjpeg-turbo.org^2',
    'github.com/anholt/libepoxy^1.5.10',
    'libpng.org^1.6',
    'simplesystems.org/libtiff^4.6',
    'gnome.org/pango^1.50',
    'openprinting.github.io/cups^2.4',
    'linuxx.org/xi^1.8x.org/xinerama^1.1x.org/xcursor^1.2xkbcommon.org^1.6github.com/KhronosGroup/Vulkan-Loader^1github.com/google/shaderc^2023cairographics.org^1.18wayland.freedesktop.org/protocols^1.43',
    'x.org/xi^1.8',
    'x.org/xinerama^1.1',
    'x.org/xcursor^1.2',
    'xkbcommon.org^1.6',
    'github.com/KhronosGroup/Vulkan-Loader^1',
    'github.com/google/shaderc^2023',
    'cairographics.org^1.18',
    'wayland.freedesktop.org/protocols^1.43',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.19.1',
    '4.19.0',
    '4.18.6',
    '4.18.5',
    '4.18.4',
    '4.18.3',
    '4.18.2',
    '4.18.1',
    '4.17.6',
    '4.17.5',
    '4.17.4',
    '4.17.3',
    '4.17.2',
    '4.17.1',
    '4.17.0',
    '4.16.13',
    '4.16.12',
    '4.16.7',
    '4.16.6',
    '4.16.5',
    '4.16.4',
    '4.16.3',
    '4.16.2',
    '4.16.1',
    '4.16.0',
    '4.15.6',
    '4.15.5',
    '4.15.4',
    '4.15.3',
    '4.15.2',
    '4.15.1',
    '4.15.0',
    '4.14.5',
    '4.14.4',
    '4.14.3',
    '4.14.2',
    '4.14.1',
    '4.14.0',
    '4.13.9',
    '4.13.8',
    '4.13.7',
    '4.13.6',
    '4.13.5',
    '4.13.4',
    '4.13.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'gtk.org/gtk4' as const,
}

export type Gtk4Package = typeof gtk4Package
