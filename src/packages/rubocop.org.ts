/**
 * **rubocop** - A Ruby static code analyzer and formatter, based on the community Ruby style guide.
 *
 * @domain `rubocop.org`
 * @programs `rubocop`
 * @version `1.75.8` (24 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/rubocop-org.md
 * @install `sh <(curl https://pkgx.sh) rubocop`
 * @dependencies `ruby-lang.org>=3.1<3.3.7`, `rubygems.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rubocoporg
 * console.log(pkg.name)        // "rubocop"
 * console.log(pkg.description) // "A Ruby static code analyzer and formatter, base..."
 * console.log(pkg.programs)    // ["rubocop"]
 * console.log(pkg.versions[0]) // "1.75.8" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rubocop-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rubocoporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'rubocop' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rubocop.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A Ruby static code analyzer and formatter, based on the community Ruby style guide.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rubocop.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) rubocop' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'rubocop',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'ruby-lang.org>=3.1<3.3.7',
    'rubygems.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.75.8',
    '1.75.7',
    '1.75.6',
    '1.75.5',
    '1.75.4',
    '1.75.3',
    '1.75.2',
    '1.75.1',
    '1.75.0',
    '1.74.0',
    '1.73.2',
    '1.73.1',
    '1.73.0',
    '1.72.2',
    '1.72.1',
    '1.72.0',
    '1.71.2',
    '1.71.1',
    '1.71.0',
    '1.70.0',
    '1.69.2',
    '1.69.1',
    '1.69.0',
    '1.68.0',
  ] as const,
  fullPath: 'rubocop.org' as const,
  aliases: [] as const,
}

export type RubocoporgPackage = typeof rubocoporgPackage
