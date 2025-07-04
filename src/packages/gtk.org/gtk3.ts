/**
 * **gtk3** - Package from pantry: gtk.org/gtk3
 *
 * @domain `gtk.org/gtk3`
 *
 * @install `launchpad install gtk.org/gtk3`
 * @dependencies `gnome.org/atk`, `gnome.org/gdk-pixbuf`, `gnome.org/glib`, ... (+18 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gtkorggtk3
 * console.log(pkg.name)        // "gtk3"
 * console.log(pkg.description) // "Package from pantry: gtk.org/gtk3"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gtk-org/gtk3.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gtkorggtk3Package = {
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
  description: 'Package from pantry: gtk.org/gtk3' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gtk.org/gtk3' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gtk.org/gtk3 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gtk.org/gtk3' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
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
    'linux:cairographics.org',
    'linux:wayland.freedesktop.org/protocols',
    'linux:x.org/protocol',
    'linux:openprinting.github.io/cups',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gtk.org/gtk3/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Gtkorggtk3Package = typeof gtkorggtk3Package
