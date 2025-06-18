/**
 * **libimagequant** - Palette quantization library that powers pngquant and other PNG optimizers
 *
 * @domain `pngquant.org/lib`
 * @version `4.3.4` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +pngquant.org/lib -- $SHELL -i`
 * @name `libimagequant`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.libimagequant
 * // Or access via domain
 * const samePkg = pantry.pngquantorglib
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libimagequant"
 * console.log(pkg.description) // "Palette quantization library that powers pngqua..."
 * console.log(pkg.versions[0]) // "4.3.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pngquant-org/lib.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libimagequantPackage = {
  /**
   * The display name of this package.
   */
  name: 'libimagequant' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pngquant.org/lib' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Palette quantization library that powers pngquant and other PNG optimizers' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pngquant.org/lib/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +pngquant.org/lib -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.3.4',
    '4.3.3',
    '4.3.2',
    '4.3.1',
    '4.3.0',
    '4.2.2',
    '4.2.1',
    '4.2.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'pngquant.org/lib' as const,
}

export type LibimagequantPackage = typeof libimagequantPackage
