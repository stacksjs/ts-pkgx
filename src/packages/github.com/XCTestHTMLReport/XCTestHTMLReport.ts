/**
 * **XCTestHTMLReport** - Package from pantry: github.com/XCTestHTMLReport/XCTestHTMLReport
 *
 * @domain `github.com/XCTestHTMLReport/XCTestHTMLReport`
 *
 * @install `launchpad install github.com/XCTestHTMLReport/XCTestHTMLReport`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomxctesthtmlreportxctesthtmlreport
 * console.log(pkg.name)        // "XCTestHTMLReport"
 * console.log(pkg.description) // "Package from pantry: github.com/XCTestHTMLRepor..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/XCTestHTMLReport/XCTestHTMLReport.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomxctesthtmlreportxctesthtmlreportPackage = {
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
  description: 'Package from pantry: github.com/XCTestHTMLReport/XCTestHTMLReport' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/XCTestHTMLReport/XCTestHTMLReport' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/XCTestHTMLReport/XCTestHTMLReport -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/XCTestHTMLReport/XCTestHTMLReport' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/XCTestHTMLReport/XCTestHTMLReport/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomxctesthtmlreportxctesthtmlreportPackage = typeof githubcomxctesthtmlreportxctesthtmlreportPackage
