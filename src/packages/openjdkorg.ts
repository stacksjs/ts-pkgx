/**
 * **openjdk.org** - Package from pantry: openjdk.org
 *
 * @domain `openjdk.org`
 *
 * @install `launchpad install openjdk.org`
 * @dependencies `giflib.sourceforge.io`, `harfbuzz.org^8`, `libjpeg-turbo.org`, ... (+17 more) (includes OS-specific dependencies with `os:package` format)
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install openjdk.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +openjdk.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install openjdk.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
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
    'linux:alsa-project.org/alsa-lib',
    'linux:freedesktop.org/fontconfig',
    'linux:freetype.org',
    'linux:x.org/x11',
    'linux:x.org/exts',
    'linux:x.org/xrandr',
    'linux:x.org/xrender',
    'linux:x.org/xt',
    'linux:x.org/xtst',
    'linux:info-zip.org/zip',
    'linux:darwinsys.com/file',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openjdk.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OpenjdkorgPackage = typeof openjdkorgPackage
