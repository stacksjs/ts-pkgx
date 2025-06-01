/**
 * **xpra** - Persistent remote applications for X11; screen sharing for X11, MacOS and MSWindows.
 *
 * @domain `xpra.org`
 * @programs `xpra`
 * @version `6.3.0` (9 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/xpra-org.md
 *
 * @install `sh <(curl https://pkgx.sh) xpra`
 * @aliases `xpra`
 * @dependencies `pkgx.sh^1`, `python.org~3.11`, `cython.org`, ... (+26 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xpra
 * // Or access via domain
 * const samePkg = pantry.xpraorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xpra"
 * console.log(pkg.description) // "Persistent remote applications for X11; screen ..."
 * console.log(pkg.programs)    // ["xpra"]
 * console.log(pkg.versions[0]) // "6.3.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/xpra-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xpraPackage = {
  /**
   * The display name of this package.
   */
  name: 'xpra' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'xpra.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Persistent remote applications for X11; screen sharing for X11, MacOS and MSWindows.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/xpra.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) xpra' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'xpra',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
    'python.org~3.11',
    'cython.org',
    'tukaani.org/xz',
    'cairographics.org',
    'cairographics.org/pycairo@1.26.1',
    'freedesktop.org/pkg-config~0.29',
    'gnome.org/PyGObject',
    'gnome.org/glib',
    'x.org/x11',
    'x.org/protocol',
    'x.org/exts',
    'x.org/xkbfile',
    'x.org/xdamage',
    'x.org/xrandr',
    'x.org/xcomposite',
    'x.org/xtst',
    'x.org/libxres',
    'x.org/xfixes',
    'videolan.org/x264',
    'webmproject.org/libvpx',
    'github.com/AOMediaCodec/libavif',
    'github.com/Cyan4973/xxHash',
    'gtk.org/gtk3',
    'gnome.org/gobject-introspection',
    'harfbuzz.org',
    'gnome.org/gdk-pixbuf',
    'gnome.org/atk',
    'gnome.org/pango',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '6.3.0',
    '6.2.5',
    '6.2.4',
    '6.2.3',
    '6.2.2',
    '6.2.1',
    '6.2.0',
    '6.1.3',
    '6.1.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'xpra',
  ] as const,
  fullPath: 'xpra.org' as const,
}

export type XpraPackage = typeof xpraPackage
