/**
 * **lcov** - Graphical front-end for GCC's coverage testing tool (gcov)
 *
 * @domain `github.com/linux-test-project/lcov`
 * @programs `lcov`, `geninfo`, `genhtml`, `gendesc`, `genpng`
 * @version `2.3.1` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/linux-test-project/lcov -- $SHELL -i`
 * @dependencies `perl.org>=5`, `python.org@3`, `cpanmin.us^1`, ... (+1 more)
 * @companions `PERL5LIB^${{prefix}}/lib/perl5`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomlinuxtestprojectlcov
 * console.log(pkg.name)        // "lcov"
 * console.log(pkg.description) // "Graphical front-end for GCC's coverage testing ..."
 * console.log(pkg.programs)    // ["lcov", "geninfo", ...]
 * console.log(pkg.versions[0]) // "2.3.1" (latest)
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
  description: 'Graphical front-end for GCC\'s coverage testing tool (gcov)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/linux-test-project/lcov/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +github.com/linux-test-project/lcov -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'lcov',
    'geninfo',
    'genhtml',
    'gendesc',
    'genpng',
  ] as const,
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
    'cpanmin.us^1',
    'gnu.org/gcc',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.3.1',
    '2.3.0',
    '2.2.0',
    '1.16.0',
  ] as const,
  aliases: [] as const,
}

export type GithubcomlinuxtestprojectlcovPackage = typeof githubcomlinuxtestprojectlcovPackage
