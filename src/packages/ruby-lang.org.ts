/**
 * **ruby** - Powerful, clean, object-oriented scripting language
 *
 * @domain `ruby-lang.org`
 * @programs `erb`, `irb`, `rake`, `rdoc`, `ri`, ... (+1 more)
 * @version `3.4.4` (42 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/ruby-lang-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +ruby-lang.org -- $SHELL -i`
 * @aliases `ruby`
 * @dependencies `openssl.org^1.1`, `pyyaml.org^0.2`, `zlib.net^1`
 * @companions `rubygems.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.ruby
 * // Or access via domain
 * const samePkg = pantry.rubylangorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ruby-lang.org"
 * console.log(pkg.description) // "Powerful, clean, object-oriented scripting lang..."
 * console.log(pkg.programs)    // ["erb", "irb", ...]
 * console.log(pkg.versions[0]) // "3.4.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ruby-lang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rubyPackage = {
  /**
   * The display name of this package.
   */
  name: 'ruby-lang.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ruby-lang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Powerful, clean, object-oriented scripting language' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ruby-lang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +ruby-lang.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'erb',
    'irb',
    'rake',
    'rdoc',
    'ri',
    'ruby',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'rubygems.org',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'pyyaml.org^0.2',
    'zlib.net^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.4.4',
    '3.4.3',
    '3.4.2',
    '3.4.1',
    '3.3.8',
    '3.3.7',
    '3.3.6',
    '3.3.5',
    '3.3.4',
    '3.3.3',
    '3.3.2',
    '3.3.1',
    '3.3.0',
    '3.2.8',
    '3.2.7',
    '3.2.6',
    '3.2.5',
    '3.2.4',
    '3.2.3',
    '3.2.2',
    '3.2.1',
    '3.2.0',
    '3.1.7',
    '3.1.6',
    '3.1.5',
    '3.1.4',
    '3.1.3',
    '3.1.2',
    '3.1.1',
    '3.1.0',
    '3.0.7',
    '3.0.6',
    '3.0.5',
    '3.0.4',
    '3.0.3',
    '3.0.2',
    '3.0.1',
    '3.0.0',
    '2.7.8',
    '2.7.6',
    '2.6.10',
    '2.5.9',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'ruby',
  ] as const,
  fullPath: 'ruby-lang.org' as const,
}

export type RubyPackage = typeof rubyPackage
