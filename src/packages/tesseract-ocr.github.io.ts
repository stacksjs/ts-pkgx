/**
 * **tesseract** - Crafters of fine Open Source products
 *
 * @domain `tesseract-ocr.github.io`
 *
 * @install `pkgx tesseract-ocr.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tesseractocrgithubio
 * console.log(pkg.name)        // "tesseract"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tesseract-ocr-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tesseractocrgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'tesseract' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/tesseract-ocr.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tesseract-ocr.github.io' as const,
  fullPath: 'tesseract-ocr.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx tesseract-ocr.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TesseractocrgithubioPackage = typeof tesseractocrgithubioPackage
