/**
 * **fftw.org** - Package from pantry: fftw.org
 *
 * @domain `fftw.org`
 *
 * @install `launchpad install fftw.org`
 * @dependencies `open-mpi.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.fftworg
 * console.log(pkg.name)        // "fftw.org"
 * console.log(pkg.description) // "Package from pantry: fftw.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fftw-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fftworgPackage = {
  /**
   * The display name of this package.
   */
  name: 'fftw.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fftw.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: fftw.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install fftw.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +fftw.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install fftw.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'open-mpi.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fftw.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FftworgPackage = typeof fftworgPackage
