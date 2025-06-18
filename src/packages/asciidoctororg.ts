/**
 * **asciidoctor** - :gem: A fast, open source text processor and publishing toolchain, written in Ruby, for converting AsciiDoc content to HTML 5, DocBook 5, and other formats.
 *
 * @domain `asciidoctor.org`
 * @programs `asciidoctor`
 * @version `2.0.23` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install asciidoctor`
 * @aliases `asciidoctor`
 * @dependencies `ruby-lang.org`, `rubygems.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.asciidoctor
 * // Or access via domain
 * const samePkg = pantry.asciidoctororg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "asciidoctor.org"
 * console.log(pkg.description) // ":gem: A fast, open source text processor and pu..."
 * console.log(pkg.programs)    // ["asciidoctor"]
 * console.log(pkg.versions[0]) // "2.0.23" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/asciidoctor-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const asciidoctorPackage = {
  /**
   * The display name of this package.
   */
  name: 'asciidoctor.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'asciidoctor.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: ':gem: A fast, open source text processor and publishing toolchain, written in Ruby, for converting AsciiDoc content to HTML 5, DocBook 5, and other formats.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/asciidoctor.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install asciidoctor' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'asciidoctor',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'ruby-lang.org',
    'rubygems.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.0.23',
    '2.0.22',
    '2.0.21',
    '2.0.20',
    '2.0.19',
    '2.0.18',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'asciidoctor',
  ] as const,
}

export type AsciidoctorPackage = typeof asciidoctorPackage
