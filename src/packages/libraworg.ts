/**
 * **libraw.org** - Library for reading RAW files from digital photo cameras
 *
 * @domain `libraw.org`
 * @programs `4channels`, `dcraw_emu`, `dcraw_half`, `half_mt`, `mem_image`, ... (+6 more)
 * @version `0.21.4` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +libraw.org -- $SHELL -i`
 * @dependencies `github.com/jasper-software/jasper`, `libjpeg-turbo.org`, `littlecms.com`, ... (+11 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libraworg
 * console.log(pkg.name)        // "libraw.org"
 * console.log(pkg.description) // "Library for reading RAW files from digital phot..."
 * console.log(pkg.programs)    // ["4channels", "dcraw_emu", ...]
 * console.log(pkg.versions[0]) // "0.21.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libraw-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libraworgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libraw.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libraw.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Library for reading RAW files from digital photo cameras' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libraw.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +libraw.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    '4channels',
    'dcraw_emu',
    'dcraw_half',
    'half_mt',
    'mem_image',
    'multirender_test',
    'postprocessing_benchmark',
    'raw-identify',
    'rawtextdump',
    'simple_dcraw',
    'unprocessed_raw',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'github.com/jasper-software/jasper',
    'libjpeg-turbo.org',
    'littlecms.com',
    'zlib.net',
    'openmp.llvm.org',
    'gnu.org/autoconf',
    'gnu.org/automake',
    'gnu.org/libtool',
    'freedesktop.org/pkg-config',
    'llvm.org',
    'gnu.org/gcc',
    'gnu.org/gcc',
    'gnu.org/wget',
    'freedesktop.org/pkg-config',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.21.4',
    '0.21.3',
    '0.21.2',
    '0.21.1',
  ] as const,
  aliases: [] as const,
}

export type LibraworgPackage = typeof libraworgPackage
