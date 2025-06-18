/**
 * **XCTestHTMLReport** - pkgx package
 *
 * @domain `github.com/XCTestHTMLReport`
 *
 * @install `pkgx github.com/XCTestHTMLReport`
 * @name `XCTestHTMLReport`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.XCTestHTMLReport
 * // Or access via domain
 * const samePkg = pantry.githubcomxctesthtmlreport
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "XCTestHTMLReport"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/XCTestHTMLReport.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xCTestHTMLReportPackage = {
  /**
   * The display name of this package.
   */
  name: 'XCTestHTMLReport' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/XCTestHTMLReport' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/XCTestHTMLReport' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/XCTestHTMLReport' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/XCTestHTMLReport' as const,
}

export type XCTestHTMLReportPackage = typeof xCTestHTMLReportPackage
