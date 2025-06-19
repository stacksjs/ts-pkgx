/**
 * **xchtmlreport** - Xcode-like HTML report for Unit and UI Tests
 *
 * @domain `github.com/XCTestHTMLReport/XCTestHTMLReport`
 * @programs `xchtmlreport`
 * @version `2.5.1` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install xchtmlreport`
 * @aliases `xchtmlreport`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xchtmlreport
 * // Or access via domain
 * const samePkg = pantry.githubcomxctesthtmlreportxctesthtmlreport
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "XCTestHTMLReport"
 * console.log(pkg.description) // "Xcode-like HTML report for Unit and UI Tests"
 * console.log(pkg.programs)    // ["xchtmlreport"]
 * console.log(pkg.versions[0]) // "2.5.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/XCTestHTMLReport/XCTestHTMLReport.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xchtmlreportPackage = {
  /**
   * The display name of this package.
   */
  name: 'XCTestHTMLReport' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/XCTestHTMLReport/XCTestHTMLReport' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Xcode-like HTML report for Unit and UI Tests' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/XCTestHTMLReport/XCTestHTMLReport/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/XCTestHTMLReport/XCTestHTMLReport' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install xchtmlreport' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'xchtmlreport',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.5.1',
    '2.5.0',
    '2.4.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'xchtmlreport',
  ] as const,
}

export type XchtmlreportPackage = typeof xchtmlreportPackage
