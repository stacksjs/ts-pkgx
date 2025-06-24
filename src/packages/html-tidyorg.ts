/**
 * **html-tidy.org** - Package from pantry: html-tidy.org
 *
 * @domain `html-tidy.org`
 *
 * @install `launchpad install html-tidy.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.htmltidyorg
 * console.log(pkg.name)        // "html-tidy.org"
 * console.log(pkg.description) // "Package from pantry: html-tidy.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/html-tidy-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const htmltidyorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'html-tidy.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'html-tidy.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: html-tidy.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install html-tidy.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +html-tidy.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install html-tidy.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/html-tidy.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type HtmltidyorgPackage = typeof htmltidyorgPackage
