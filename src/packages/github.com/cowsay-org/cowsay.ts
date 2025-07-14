/**
 * **cowsay** - Package from pantry: github.com/cowsay-org/cowsay
 *
 * @domain `github.com/cowsay-org/cowsay`
 *
 * @install `launchpad install github.com/cowsay-org/cowsay`
 * @dependencies `perl.org^5`
 * @companions `PERL5LIB^{{prefix}}/lib/perl5:$PERL5LIB`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomcowsayorgcowsay
 * console.log(pkg.name)        // "cowsay"
 * console.log(pkg.description) // "Package from pantry: github.com/cowsay-org/cowsay"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/cowsay-org/cowsay.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomcowsayorgcowsayPackage = {
  /**
   * The display name of this package.
   */
  name: 'cowsay' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/cowsay-org/cowsay' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/cowsay-org/cowsay' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/cowsay-org/cowsay' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/cowsay-org/cowsay -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/cowsay-org/cowsay' as const,
  programs: [] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'PERL5LIB^{{prefix}}/lib/perl5:$PERL5LIB',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'perl.org^5',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/cowsay-org/cowsay/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomcowsayorgcowsayPackage = typeof githubcomcowsayorgcowsayPackage
