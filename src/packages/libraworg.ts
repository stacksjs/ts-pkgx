/**
 * **libraw.org** - Library for reading RAW files from digital photo cameras
 *
 * @domain `libraw.org`
 * @programs `4channels`, `dcraw_emu`, `dcraw_half`, `half_mt`, `mem_image`, ... (+6 more)
 * @version `0.21.4` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +libraw.org -- $SHELL -i`
 * @dependencies `github.com/jasper-software/jasper`, `libjpeg-turbo.org`, `littlecms.com`, ... (+2 more) (includes OS-specific dependencies with `os:package` format)
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
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
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'github.com/jasper-software/jasper',
    'libjpeg-turbo.org',
    'littlecms.com',
    'zlib.net',
    'darwin:openmp.llvm.org',
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
