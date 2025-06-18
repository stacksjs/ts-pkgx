/**
 * **fftw** - C routines to compute the Discrete Fourier Transform
 *
 * @domain `fftw.org`
 * @programs `fftw-wisdom`, `fftw-wisdom-to-conf`, `fftwf-wisdom`, `fftwl-wisdom`
 * @version `3.3.10` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +fftw.org -- $SHELL -i`
 * @name `fftw`
 * @dependencies `open-mpi.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.fftw
 * // Or access via domain
 * const samePkg = pantry.fftworg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "fftw"
 * console.log(pkg.description) // "C routines to compute the Discrete Fourier Tran..."
 * console.log(pkg.programs)    // ["fftw-wisdom", "fftw-wisdom-to-conf", ...]
 * console.log(pkg.versions[0]) // "3.3.10" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fftw-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fftwPackage = {
  /**
   * The display name of this package.
   */
  name: 'fftw' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fftw.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'C routines to compute the Discrete Fourier Transform' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fftw.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +fftw.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'fftw-wisdom',
    'fftw-wisdom-to-conf',
    'fftwf-wisdom',
    'fftwl-wisdom',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'open-mpi.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.3.10',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'fftw' as const,
}

export type FftwPackage = typeof fftwPackage
