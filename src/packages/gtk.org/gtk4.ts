/**
 * **gtk4** - Package from pantry: gtk.org/gtk4
 *
 * @domain `gtk.org/gtk4`
 *
 * @install `launchpad install gtk.org/gtk4`
 * @dependencies `gnome.org/gdk-pixbuf^2.42`, `gnome.org/glib^2.78`, `ebassi.github.io/graphene^1.10`, ... (+15 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gtkorggtk4
 * console.log(pkg.name)        // "gtk4"
 * console.log(pkg.description) // "Package from pantry: gtk.org/gtk4"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gtk-org/gtk4.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gtkorggtk4Package = {
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
  description: 'Package from pantry: gtk.org/gtk4' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gtk.org/gtk4' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gtk.org/gtk4 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gtk.org/gtk4' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
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
    'linux:x.org/xi^1.8',
    'linux:x.org/xinerama^1.1',
    'linux:x.org/xcursor^1.2',
    'linux:xkbcommon.org^1.6',
    'linux:github.com/KhronosGroup/Vulkan-Loader^1',
    'linux:github.com/google/shaderc^2023',
    'linux:cairographics.org^1.18',
    'linux:wayland.freedesktop.org/protocols^1.43 # since 4.19.1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gtk.org/gtk4/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Gtkorggtk4Package = typeof gtkorggtk4Package
