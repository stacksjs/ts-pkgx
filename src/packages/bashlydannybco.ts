/**
 * **bashly** - Bash command line framework and CLI generator
 *
 * @domain `bashly.dannyb.co`
 * @programs `bashly`
 * @version `1.2.12` (14 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install bashly`
 * @aliases `bashly`
 * @dependencies `ruby-lang.org^3.1`, `rubygems.org`, `rubygems.org`
 * @companions `gnu.org/bash`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.bashly
 * // Or access via domain
 * const samePkg = pantry.bashlydannybco
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "bashly.dannyb.co"
 * console.log(pkg.description) // "Bash command line framework and CLI generator"
 * console.log(pkg.programs)    // ["bashly"]
 * console.log(pkg.versions[0]) // "1.2.12" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/bashly-dannyb-co.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bashlyPackage = {
  /**
   * The display name of this package.
   */
  name: 'bashly.dannyb.co' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'bashly.dannyb.co' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Bash command line framework and CLI generator' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/bashly.dannyb.co/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install bashly' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'bashly',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'gnu.org/bash',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'ruby-lang.org^3.1',
    'rubygems.org',
    'rubygems.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.2.12',
    '1.2.11',
    '1.2.10',
    '1.2.9',
    '1.2.8',
    '1.2.7',
    '1.2.6',
    '1.2.5',
    '1.2.4',
    '1.2.3',
    '1.2.2',
    '1.2.1',
    '1.2.0',
    '1.1.10',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'bashly',
  ] as const,
}

export type BashlyPackage = typeof bashlyPackage
