/**
 * **cfitsio** - Package from pantry: heasarc.gsfc.nasa.gov/cfitsio
 *
 * @domain `heasarc.gsfc.nasa.gov/cfitsio`
 *
 * @install `launchpad install heasarc.gsfc.nasa.gov/cfitsio`
 * @dependencies `darwin:zlib.net` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.heasarcgsfcnasagovcfitsio
 * console.log(pkg.name)        // "cfitsio"
 * console.log(pkg.description) // "Package from pantry: heasarc.gsfc.nasa.gov/cfitsio"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/heasarc-gsfc-nasa-gov/cfitsio.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const heasarcgsfcnasagovcfitsioPackage = {
  /**
   * The display name of this package.
   */
  name: 'cfitsio' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'heasarc.gsfc.nasa.gov/cfitsio' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: heasarc.gsfc.nasa.gov/cfitsio' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install heasarc.gsfc.nasa.gov/cfitsio' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +heasarc.gsfc.nasa.gov/cfitsio -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install heasarc.gsfc.nasa.gov/cfitsio' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'darwin:zlib.net',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/heasarc.gsfc.nasa.gov/cfitsio/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type HeasarcgsfcnasagovcfitsioPackage = typeof heasarcgsfcnasagovcfitsioPackage
