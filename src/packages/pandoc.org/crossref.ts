/**
 * **pandoc-crossref** - Pandoc filter for numbering and cross-referencing
 *
 * @domain `pandoc.org/crossref`
 * @programs `pandoc-crossref`
 * @version `0.3.20` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install pandoc-crossref`
 * @aliases `pandoc-crossref`
 * @dependencies `pandoc.org^2.18`, `zlib.net@1`, `gnu.org/gmp@6`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.pandoccrossref
 * // Or access via domain
 * const samePkg = pantry.pandocorgcrossref
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "crossref"
 * console.log(pkg.description) // "Pandoc filter for numbering and cross-referencing"
 * console.log(pkg.programs)    // ["pandoc-crossref"]
 * console.log(pkg.versions[0]) // "0.3.20" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pandoc-org/crossref.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pandoccrossrefPackage = {
  /**
   * The display name of this package.
   */
  name: 'crossref' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pandoc.org/crossref' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Pandoc filter for numbering and cross-referencing' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pandoc.org/crossref/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pandoc-crossref' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pandoc-crossref',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pandoc.org^2.18',
    'zlib.net@1',
    'gnu.org/gmp@6',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.3.20',
    '0.3.19',
    '0.3.18.2',
    '0.3.18.1',
    '0.3.17.1',
    '0.3.17.0',
    '0.3.16.0',
    '0.3.15.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'pandoc-crossref',
  ] as const,
}

export type PandoccrossrefPackage = typeof pandoccrossrefPackage
