/**
 * **fftw** - Crafters of fine Open Source products
 *
 * @domain `fftw.org`
 *
 * @install `pkgx fftw.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.fftworg
 * console.log(pkg.name)        // "fftw"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fftw-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fftworgPackage = {
  /**
   * The display name of this package.
   */
  name: 'fftw' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/fftw.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fftw.org' as const,
  fullPath: 'fftw.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx fftw.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type FftworgPackage = typeof fftworgPackage
