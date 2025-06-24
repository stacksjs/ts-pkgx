/**
 * **OCRmyPDF** - Package from pantry: github.com/ocrmypdf/OCRmyPDF
 *
 * @domain `github.com/ocrmypdf/OCRmyPDF`
 *
 * @install `launchpad install github.com/ocrmypdf/OCRmyPDF`
 * @dependencies `pkgx.sh^1`, `qpdf.sourceforge.io^12 # as of 16.10.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomocrmypdfocrmypdf
 * console.log(pkg.name)        // "OCRmyPDF"
 * console.log(pkg.description) // "Package from pantry: github.com/ocrmypdf/OCRmyPDF"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ocrmypdf/OCRmyPDF.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomocrmypdfocrmypdfPackage = {
  /**
   * The display name of this package.
   */
  name: 'OCRmyPDF' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ocrmypdf/OCRmyPDF' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/ocrmypdf/OCRmyPDF' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/ocrmypdf/OCRmyPDF' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/ocrmypdf/OCRmyPDF -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/ocrmypdf/OCRmyPDF' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
    'qpdf.sourceforge.io^12 # as of 16.10.1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/ocrmypdf/OCRmyPDF/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomocrmypdfocrmypdfPackage = typeof githubcomocrmypdfocrmypdfPackage
