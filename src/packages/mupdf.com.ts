/**
 * **mupdf.com** - Lightweight PDF and XPS viewer
 *
 * @domain `mupdf.com`
 * @programs `mupdf-gl`, `muraster`, `mutool`
 * @version `1.26.1` (27 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/mupdf-com.md
 * @install `sh <(curl https://pkgx.sh) +mupdf.com -- $SHELL -i`
 * @dependencies `zlib.net^1`, `openssl.org^1.1`, `info-zip.org/unzip^6`, ... (+19 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mupdfcom
 * console.log(pkg.name)        // "mupdf.com"
 * console.log(pkg.description) // "Lightweight PDF and XPS viewer"
 * console.log(pkg.programs)    // ["mupdf-gl", "muraster", ...]
 * console.log(pkg.versions[0]) // "1.26.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mupdf-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mupdfcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'mupdf.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mupdf.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Lightweight PDF and XPS viewer' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mupdf.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +mupdf.com -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mupdf-gl',
    'muraster',
    'mutool',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
    'openssl.org^1.1',
    'info-zip.org/unzip^6',
    'github.com/google/brotli^1',
    'freetype.org^2',
    'harfbuzz.org^9',
    'mujs.com^1',
    'openjpeg.org^2',
    'jbig2dec.com^0',
    'darwinlibarchive.org^3',
    'libarchive.org^3',
    'linuxmesa3d.org^23freeglut.sourceforge.io^3freedesktop.org/mesa-glu^9x.org/protocol>=2022x.org/x11^1x.org/xcursor^1x.org/xinerama^1x.org/xrandr^1gnome.org/glib^2x.org/xtrans^1',
    'mesa3d.org^23',
    'freeglut.sourceforge.io^3',
    'freedesktop.org/mesa-glu^9',
    'x.org/protocol>=2022',
    'x.org/x11^1',
    'x.org/xcursor^1',
    'x.org/xinerama^1',
    'x.org/xrandr^1',
    'gnome.org/glib^2',
    'x.org/xtrans^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.26.1',
    '1.26.0',
    '1.25.6',
    '1.25.5',
    '1.25.4',
    '1.25.3',
    '1.25.2',
    '1.25.1',
    '1.25.0',
    '1.24.11',
    '1.24.10',
    '1.24.9',
    '1.24.8',
    '1.24.7',
    '1.24.6',
    '1.24.5',
    '1.24.4',
    '1.24.3',
    '1.24.2',
    '1.24.1',
    '1.24.0',
    '1.23.11',
    '1.23.10',
    '1.23.9',
    '1.23.8',
    '1.23.7',
    '1.23.6',
  ] as const,
  fullPath: 'mupdf.com' as const,
  aliases: [] as const,
}

export type MupdfcomPackage = typeof mupdfcomPackage
