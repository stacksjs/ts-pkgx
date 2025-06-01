/**
 * **heasarc.gsfc.nasa.gov** - Go home.
 *
 * @domain `heasarc.gsfc.nasa.gov`
 *
 * @install `pkgx heasarc.gsfc.nasa.gov`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.heasarcgsfcnasagov
 * console.log(pkg.name)        // "heasarc.gsfc.nasa.gov"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/heasarc-gsfc-nasa-gov.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const heasarcgsfcnasagovPackage = {
  /**
   * The display name of this package.
   */
  name: '' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go home.' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/heasarc.gsfc.nasa.gov/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'heasarc.gsfc.nasa.gov' as const,
  fullPath: 'heasarc.gsfc.nasa.gov' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx heasarc.gsfc.nasa.gov' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type HeasarcgsfcnasagovPackage = typeof heasarcgsfcnasagovPackage
