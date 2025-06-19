/**
 * **source-highlight** - Source-code syntax highlighter
 *
 * @domain `gnu.org/source-highlight`
 * @programs `check-regexp`, `source-highlight`, `source-highlight-settings`
 * @version `3.1.9` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +gnu.org/source-highlight -- $SHELL -i`
 * @dependencies `boost.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorgsourcehighlight
 * console.log(pkg.name)        // "source-highlight"
 * console.log(pkg.description) // "Source-code syntax highlighter"
 * console.log(pkg.programs)    // ["check-regexp", "source-highlight", ...]
 * console.log(pkg.versions[0]) // "3.1.9" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/source-highlight.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgsourcehighlightPackage = {
  /**
   * The display name of this package.
   */
  name: 'source-highlight' as const,
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +gnu.org/source-highlight -- $SHELL -i' as const,
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
  aliases: [] as const,
}

export type GnuorgsourcehighlightPackage = typeof gnuorgsourcehighlightPackage
