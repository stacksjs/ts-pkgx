/**
 * **tesseract-ocr.github.io** - Package from pantry: tesseract-ocr.github.io
 *
 * @domain `tesseract-ocr.github.io`
 *
 * @install `launchpad install tesseract-ocr.github.io`
 * @dependencies `cairographics.org@1`, `unicode.org@71`, `leptonica.org`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tesseractocrgithubio
 * console.log(pkg.name)        // "tesseract-ocr.github.io"
 * console.log(pkg.description) // "Package from pantry: tesseract-ocr.github.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tesseract-ocr-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tesseractocrgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'tesseract-ocr.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tesseract-ocr.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: tesseract-ocr.github.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install tesseract-ocr.github.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +tesseract-ocr.github.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install tesseract-ocr.github.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'cairographics.org@1',
    'unicode.org@71',
    'leptonica.org',
    'libarchive.org',
    'gnome.org/pango@1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tesseract-ocr.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TesseractocrgithubioPackage = typeof tesseractocrgithubioPackage
