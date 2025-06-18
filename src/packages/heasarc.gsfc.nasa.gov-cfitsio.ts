/**
 * **cfitsio** - pkgx package
 *
 * @domain `heasarc.gsfc.nasa.gov/cfitsio`
 * @version `4.6.2` (8 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/heasarc-gsfc-nasa-gov/cfitsio.md
 *
 * @install `sh <(curl https://pkgx.sh) +heasarc.gsfc.nasa.gov/cfitsio -- $SHELL -i`
 * @aliases `cfitsio`
 * @dependencies `darwinzlib.net`, `zlib.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cfitsio
 * // Or access via domain
 * const samePkg = pantry.heasarcgsfcnasagovcfitsio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "heasarc.gsfc.nasa.gov/cfitsio"
 * console.log(pkg.versions[0]) // "4.6.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/heasarc-gsfc-nasa-gov/cfitsio.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cfitsioPackage = {
  /**
   * The display name of this package.
   */
  name: 'heasarc.gsfc.nasa.gov/cfitsio' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'heasarc.gsfc.nasa.gov/cfitsio' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/heasarc.gsfc.nasa.gov/cfitsio/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +heasarc.gsfc.nasa.gov/cfitsio -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'darwinzlib.net',
    'zlib.net',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.6.2',
    '4.6.0',
    '4.5.0',
    '4.4.1',
    '4.4.0',
    '4.3.1',
    '4.3.0',
    '4.2.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'cfitsio',
  ] as const,
  fullPath: 'heasarc.gsfc.nasa.gov/cfitsio' as const,
}

export type CfitsioPackage = typeof cfitsioPackage
