/**
 * **mupdf.com** - Package from pantry: mupdf.com
 *
 * @domain `mupdf.com`
 *
 * @install `launchpad install mupdf.com`
 * @dependencies `zlib.net^1`, `openssl.org^1.1`, `info-zip.org/unzip^6`, ... (+17 more) (includes OS-specific dependencies with `os:package` format)
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mupdf.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +mupdf.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mupdf.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
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
    'darwin:libarchive.org^3',
    'linux:mesa3d.org^23',
    'linux:freeglut.sourceforge.io^3',
    'linux:freedesktop.org/mesa-glu^9',
    'linux:x.org/protocol>=2022',
    'linux:x.org/x11^1',
    'linux:x.org/xcursor^1',
    'linux:x.org/xinerama^1',
    'linux:x.org/xrandr^1',
    'linux:gnome.org/glib^2',
    'linux:x.org/xtrans^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mupdf.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MupdfcomPackage = typeof mupdfcomPackage
