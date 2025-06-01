/**
 * **gdal.org** - Crafters of fine Open Source products
 *
 * @domain `gdal.org`
 *
 * @install `pkgx gdal.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gdalorg
 * console.log(pkg.name)        // "gdal.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gdal-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gdalorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'gdal.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/gdal.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gdal.org' as const,
  fullPath: 'gdal.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx gdal.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GdalorgPackage = typeof gdalorgPackage
