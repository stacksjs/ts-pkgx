/**
 * **lcov** - Package from pantry: github.com/linux-test-project/lcov
 *
 * @domain `github.com/linux-test-project/lcov`
 *
 * @install `launchpad install github.com/linux-test-project/lcov`
 * @dependencies `perl.org>=5`, `python.org@3`
 * @companions `PERL5LIB^${{prefix}}/lib/perl5`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomlinuxtestprojectlcov
 * console.log(pkg.name)        // "lcov"
 * console.log(pkg.description) // "Package from pantry: github.com/linux-test-proj..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/linux-test-project/lcov.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomlinuxtestprojectlcovPackage = {
  /**
   * The display name of this package.
   */
  name: 'lcov' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/linux-test-project/lcov' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/linux-test-project/lcov' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/linux-test-project/lcov' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/linux-test-project/lcov -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/linux-test-project/lcov' as const,
  programs: [] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'PERL5LIB^${{prefix}}/lib/perl5',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'perl.org>=5',
    'python.org@3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/linux-test-project/lcov/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomlinuxtestprojectlcovPackage = typeof githubcomlinuxtestprojectlcovPackage
