/**
 * **qt.io** - pkgx package
 *
 * @domain `qt.io`
 * @programs `balsam`, `canbusutil`, `lconvert`, `lprodump`, `lrelease`, ... (+38 more)
 * @version `5.15.10` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +qt.io -- $SHELL -i`
 * @dependencies `freetype.org`, `gnome.org/glib`, `libjpeg-turbo.org`, ... (+47 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.qtio
 * console.log(pkg.name)        // "qt.io"
 * console.log(pkg.programs)    // ["balsam", "canbusutil", ...]
 * console.log(pkg.versions[0]) // "5.15.10" (latest)
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
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/qt.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +qt.io -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'balsam',
    'canbusutil',
    'lconvert',
    'lprodump',
    'lrelease',
    'lrelease-pro',
    'lupdate',
    'lupdate-pro',
    'meshdebug',
    'moc',
    'qcollectiongenerator',
    'qdbus',
    'qdbuscpp2xml',
    'qdbusxml2cpp',
    'qdistancefieldgenerator',
    'qhelpgenerator',
    'qlalr',
    'qmake',
    'qmlcachegen',
    'qmleasing',
    'qmlformat',
    'qmlimportscanner',
    'qmllint',
    'qmlmin',
    'qmlplugindump',
    'qmlpreview',
    'qmlprofiler',
    'qmlscene',
    'qmltestrunner',
    'qmltime',
    'qmltyperegistrar',
    'qscxmlc',
    'qtattributionsscanner',
    'qtdiag',
    'qtpaths',
    'qtplugininfo',
    'qvkgen',
    'rcc',
    'repc',
    'tracegen',
    'uic',
    'xmlpatterns',
    'xmlpatternsvalidator',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
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
    'alsa-project.org/alsa-lib',
    'freedesktop.org/fontconfig',
    'harfbuzz.org',
    'unicode.org~71',
    'dri.freedesktop.org',
    'libevent.org',
    'x.org/ice',
    'x.org/sm',
    'webmproject.org/libvpx',
    'x.org/xcomposite',
    'xkbcommon.org~1.5',
    'x.org/xkbfile',
    'x.org/xrandr',
    'x.org/xtst',
    'mesa3d.org',
    'zlib.net/minizip',
    'mozilla.org/nss',
    'opus-codec.org',
    'libsdl.org',
    'google.github.io/snappy',
    'systemd.io',
    'wayland.freedesktop.org',
    'freedesktop.org/xcb-util',
    'freedesktop.org/xcb-util-image',
    'freedesktop.org/xcb-util-keysyms',
    'freedesktop.org/xcb-util-renderutil',
    'freedesktop.org/xcb-util-wm',
    'facebook.com/zstd',
    'nodejs.org',
    'freedesktop.org/pkg-config',
    'python.org>=2.7',
    'gnu.org/gperf',
    'perl.org>=5.12',
    'ruby-lang.org>=1.9.3',
    'llvm.org<16',
    'gnu.org/make',
    'llvm.org',
    'gnu.org/make',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.15.10',
  ] as const,
  aliases: [] as const,
}

export type QtioPackage = typeof qtioPackage
