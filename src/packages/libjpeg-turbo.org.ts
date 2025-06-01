/**
 * **libjpeg-turbo.org** - Crafters of fine Open Source products
 *
 * @domain `libjpeg-turbo.org`
 *
 * @install `pkgx libjpeg-turbo.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libjpegturboorg
 * console.log(pkg.name)        // "libjpeg-turbo.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libjpeg-turbo-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libjpegturboorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libjpeg-turbo.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/libjpeg-turbo.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libjpeg-turbo.org' as const,
  fullPath: 'libjpeg-turbo.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx libjpeg-turbo.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LibjpegturboorgPackage = typeof libjpegturboorgPackage
