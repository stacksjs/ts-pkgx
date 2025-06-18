/**
 * **source-highlight** - Source-code syntax highlighter
 *
 * @domain `gnu.org/source-highlight`
 * @programs `check-regexp`, `source-highlight`, `source-highlight-settings`
 * @version `3.1.9` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/source-highlight.md
 *
 * @install `sh <(curl https://pkgx.sh) +gnu.org/source-highlight -- $SHELL -i`
 * @aliases `source-highlight`
 * @dependencies `boost.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.sourcehighlight
 * // Or access via domain
 * const samePkg = pantry.gnuorgsourcehighlight
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gnu.org/source-highlight"
 * console.log(pkg.description) // "Source-code syntax highlighter"
 * console.log(pkg.programs)    // ["check-regexp", "source-highlight", ...]
 * console.log(pkg.versions[0]) // "3.1.9" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/source-highlight.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sourcehighlightPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnu.org/source-highlight' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/source-highlight' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Source-code syntax highlighter' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/source-highlight/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnu.org/source-highlight -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'check-regexp',
    'source-highlight',
    'source-highlight-settings',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'boost.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.1.9',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'source-highlight',
  ] as const,
  fullPath: 'gnu.org/source-highlight' as const,
}

export type SourcehighlightPackage = typeof sourcehighlightPackage
