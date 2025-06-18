/**
 * **openjdk.org** - Package from pantry: openjdk.org
 *
 * @domain `openjdk.org`
 *
 * @install `launchpad install openjdk.org`
 * @dependencies `giflib.sourceforge.io`, `harfbuzz.org^8`, `libjpeg-turbo.org`, ... (+22 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openjdkorg
 * console.log(pkg.name)        // "openjdk.org"
 * console.log(pkg.description) // "Package from pantry: openjdk.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openjdk-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openjdkorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'openjdk.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openjdk.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: openjdk.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install openjdk.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'giflib.sourceforge.io',
    'harfbuzz.org^8',
    'libjpeg-turbo.org',
    'libpng.org',
    'littlecms.com',
    'openprinting.github.io/cups',
    'info-zip.org/unzip',
    'zlib.net',
    'libzip.org',
    'alsa-project.org/alsa-lib',
    'freedesktop.org/fontconfig',
    'freetype.org',
    'x.org/x11',
    'x.org/exts',
    'x.org/xrandr',
    'x.org/xrender',
    'x.org/xt',
    'x.org/xtst',
    'info-zip.org/zip',
    'darwinsys.com/file',
    'llvm.org^16',
    'gnu.org/make',
    'gnu.org/autoconf',
    'freedesktop.org/pkg-config',
    'gnu.org/wget',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openjdk.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OpenjdkorgPackage = typeof openjdkorgPackage
