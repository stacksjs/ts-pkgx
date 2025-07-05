/**
 * **qt.io** - Package from pantry: qt.io
 *
 * @domain `qt.io`
 *
 * @install `launchpad install qt.io`
 * @dependencies `freetype.org`, `gnome.org/glib`, `libjpeg-turbo.org`, ... (+37 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.qtio
 * console.log(pkg.name)        // "qt.io"
 * console.log(pkg.description) // "Package from pantry: qt.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/qt-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const qtioPackage = {
  /**
   * The display name of this package.
   */
  name: 'qt.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'qt.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: qt.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install qt.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +qt.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install qt.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'freetype.org',
    'gnome.org/glib',
    'libjpeg-turbo.org',
    'libpng.org',
    'pcre.org/v2',
    'google.com/webp',
    'gnu.org/bison',
    'github.com/westes/flex',
    'kerberos.org',
    'gnome.org/libxslt',
    'sqlite.org',
    'unicode.org^71',
    'linux:alsa-project.org/alsa-lib',
    'linux:freedesktop.org/fontconfig',
    'linux:harfbuzz.org',
    'linux:unicode.org~71',
    'linux:dri.freedesktop.org',
    'linux:libevent.org',
    'linux:x.org/ice',
    'linux:x.org/sm',
    'linux:webmproject.org/libvpx',
    'linux:x.org/xcomposite',
    'linux:xkbcommon.org~1.5',
    'linux:x.org/xkbfile',
    'linux:x.org/xrandr',
    'linux:x.org/xtst',
    'linux:mesa3d.org',
    'linux:zlib.net/minizip',
    'linux:mozilla.org/nss',
    'linux:opus-codec.org',
    'linux:libsdl.org',
    'linux:google.github.io/snappy',
    'linux:systemd.io',
    'linux:wayland.freedesktop.org',
    'linux:freedesktop.org/xcb-util',
    'linux:freedesktop.org/xcb-util-image',
    'linux:freedesktop.org/xcb-util-keysyms',
    'linux:freedesktop.org/xcb-util-renderutil',
    'linux:freedesktop.org/xcb-util-wm',
    'linux:facebook.com/zstd',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/qt.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type QtioPackage = typeof qtioPackage
