/**
 * **rubocop.org** - pkgx package
 *
 * @domain `rubocop.org`
 *
 * @install `launchpad install rubocop.org`
 * @dependencies `ruby-lang.org>=3.1<3.3.7`, `rubygems.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rubocoporg
 * console.log(pkg.name)        // "rubocop.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rubocop-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rubocoporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'rubocop.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rubocop.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install rubocop.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'ruby-lang.org>=3.1<3.3.7',
    'rubygems.org',
  ] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +rubocop.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install rubocop.org' as const,
}

export type RubocoporgPackage = typeof rubocoporgPackage
