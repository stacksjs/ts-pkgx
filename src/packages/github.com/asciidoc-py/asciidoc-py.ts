/**
 * **asciidoc** - Formatter/translator for text files to numerous formats
 *
 * @domain `github.com/asciidoc-py/asciidoc-py`
 * @programs `asciidoc`
 * @version `10.2.1` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install asciidoc`
 * @aliases `asciidoc`
 * @dependencies `docbook.org`, `python.org~3.11`, `gnu.org/source-highlight`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.asciidoc
 * // Or access via domain
 * const samePkg = pantry.githubcomasciidocpyasciidocpy
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "asciidoc-py"
 * console.log(pkg.description) // "Formatter/translator for text files to numerous..."
 * console.log(pkg.programs)    // ["asciidoc"]
 * console.log(pkg.versions[0]) // "10.2.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/asciidoc-py/asciidoc-py.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const asciidocPackage = {
  /**
   * The display name of this package.
   */
  name: 'asciidoc-py' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/asciidoc-py/asciidoc-py' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Formatter/translator for text files to numerous formats' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/asciidoc-py/asciidoc-py/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install asciidoc' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'asciidoc',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'docbook.org',
    'python.org~3.11',
    'gnu.org/source-highlight',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '10.2.1',
    '10.2.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'asciidoc',
  ] as const,
}

export type AsciidocPackage = typeof asciidocPackage
