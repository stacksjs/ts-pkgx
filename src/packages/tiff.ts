/**
 * **tiff** - TIFF library and utilities
 *
 * @domain `simplesystems.org/libtiff`
 * @programs `tiffcp`, `tiffdump`, `tiffinfo`, `tiffset`, `tiffsplit`
 * @version `4.7.0` (4 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/simplesystems-org/libtiff.md
 *
 * @install `sh <(curl https://pkgx.sh) +simplesystems.org/libtiff -- $SHELL -i`
 * @name `tiff`
 * @aliases `libtiff`
 * @dependencies `facebook.com/zstd^1`, `libjpeg-turbo.org^2`, `zlib.net^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.tiff
 * // Or access via domain
 * const samePkg = pantry.simplesystemsorglibtiff
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tiff"
 * console.log(pkg.description) // "TIFF library and utilities"
 * console.log(pkg.programs)    // ["tiffcp", "tiffdump", ...]
 * console.log(pkg.versions[0]) // "4.7.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/simplesystems-org/libtiff.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tiffPackage = {
  /**
   * The display name of this package.
   */
  name: 'tiff' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'simplesystems.org/libtiff' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'TIFF library and utilities' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/simplesystems.org/libtiff/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +simplesystems.org/libtiff -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'tiffcp',
    'tiffdump',
    'tiffinfo',
    'tiffset',
    'tiffsplit',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'facebook.com/zstd^1',
    'libjpeg-turbo.org^2',
    'zlib.net^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.7.0',
    '4.6.0',
    '4.5.1',
    '4.5.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libtiff',
  ] as const,
  fullPath: 'simplesystems.org/libtiff' as const,
}

export type TiffPackage = typeof tiffPackage
