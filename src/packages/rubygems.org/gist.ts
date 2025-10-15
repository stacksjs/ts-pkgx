/**
 * **gist** - Potentially the best command line gister.
 *
 * @domain `rubygems.org/gist`
 * @programs `gist`
 * @version `6.0.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install rubygems.org/gist`
 * @homepage http://defunkt.io/gist/
 * @dependencies `ruby-lang.org^3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rubygemsorggist
 * console.log(pkg.name)        // "gist"
 * console.log(pkg.description) // "Potentially the best command line gister."
 * console.log(pkg.programs)    // ["gist"]
 * console.log(pkg.versions[0]) // "6.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rubygems-org/gist.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rubygemsorggistPackage = {
  /**
   * The display name of this package.
   */
  name: 'gist' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rubygems.org/gist' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Potentially the best command line gister.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rubygems.org/gist/package.yml' as const,
  homepageUrl: 'http://defunkt.io/gist/' as const,
  githubUrl: 'https://github.com/defunkt/gist' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install rubygems.org/gist' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +rubygems.org/gist -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install rubygems.org/gist' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gist',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'ruby-lang.org^3',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '6.0.0',
  ] as const,
  aliases: [] as const,
}

export type RubygemsorggistPackage = typeof rubygemsorggistPackage
