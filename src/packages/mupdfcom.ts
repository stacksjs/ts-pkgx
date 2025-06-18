/**
 * **mupdf.com** - Package from pantry: mupdf.com
 *
 * @domain `mupdf.com`
 *
 * @install `launchpad install mupdf.com`
 * @dependencies `zlib.net^1`, `openssl.org^1.1`, `info-zip.org/unzip^6`, ... (+18 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mupdfcom
 * console.log(pkg.name)        // "mupdf.com"
 * console.log(pkg.description) // "Package from pantry: mupdf.com"
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
  description: 'Package from pantry: mupdf.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install mupdf.com' as const,
  programs: [] as const,
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
    'libarchive.org^3',
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
    'git-scm.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mupdf.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MupdfcomPackage = typeof mupdfcomPackage
