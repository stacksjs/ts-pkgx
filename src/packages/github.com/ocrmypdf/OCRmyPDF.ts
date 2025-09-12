/**
 * **ocrmypdf** - OCRmyPDF adds an OCR text layer to scanned PDF files, allowing them to be searched
 *
 * @domain `github.com/ocrmypdf/OCRmyPDF`
 * @programs `ocrmypdf`
 * @version `16.11.0` (39 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install ocrmypdf`
 * @name `ocrmypdf`
 * @dependencies `pkgx.sh^1`, `qpdf.sourceforge.io^12 # as of 16.10.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ocrmypdf
 * // Or access via domain
 * const samePkg = pantry.githubcomocrmypdfocrmypdf
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ocrmypdf"
 * console.log(pkg.description) // "OCRmyPDF adds an OCR text layer to scanned PDF ..."
 * console.log(pkg.programs)    // ["ocrmypdf"]
 * console.log(pkg.versions[0]) // "16.11.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ocrmypdf/OCRmyPDF.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ocrmypdfPackage = {
  /**
   * The display name of this package.
   */
  name: 'ocrmypdf' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ocrmypdf/OCRmyPDF' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'OCRmyPDF adds an OCR text layer to scanned PDF files, allowing them to be searched' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/ocrmypdf/OCRmyPDF/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ocrmypdf' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ocrmypdf',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
    'qpdf.sourceforge.io^12 # as of 16.10.1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '16.11.0',
    '16.10.4',
    '16.10.3',
    '16.10.2',
    '16.10.1',
    '16.10.0',
    '16.7.0',
    '16.6.2',
    '16.6.1',
    '16.6.0',
    '16.5.0',
    '16.4.3',
    '16.4.2',
    '16.4.1',
    '16.4.0',
    '16.3.1',
    '16.3.0',
    '16.2.0',
    '16.1.2',
    '16.1.1',
    '16.1.0',
    '16.0.4',
    '16.0.3',
    '16.0.2',
    '16.0.1',
    '16.0.0',
    '15.4.4',
    '15.4.3',
    '15.4.2',
    '15.4.1',
    '15.4.0',
    '15.3.1',
    '15.3.0',
    '15.2.0',
    '15.1.0',
    '15.0.2',
    '15.0.1',
    '15.0.0',
    '14.4.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) ocrmypdf -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install ocrmypdf' as const,
}

export type OcrmypdfPackage = typeof ocrmypdfPackage
