/**
 * **ag** - A code-searching tool similar to ack, but faster.
 *
 * @domain `geoff.greer.fm/ag`
 * @programs `ag`
 * @version `2.2.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) ag`
 * @aliases `ag`, `the silver searcher`
 * @dependencies `pcre.org^8`, `tukaani.org/xz^5.4.5`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.ag
 * // Or access via domain
 * const samePkg = pantry.geoffgreerfmag
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "The Silver Searcher"
 * console.log(pkg.description) // "A code-searching tool similar to ack, but faster."
 * console.log(pkg.programs)    // ["ag"]
 * console.log(pkg.versions[0]) // "2.2.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/geoff-greer-fm/ag.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const agPackage = {
  /**
   * The display name of this package.
   */
  name: 'The Silver Searcher' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'geoff.greer.fm/ag' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A code-searching tool similar to ack, but faster.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/geoff.greer.fm/ag/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) ag' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ag',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pcre.org^8',
    'tukaani.org/xz^5.4.5',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.2.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'ag',
    'the silver searcher',
  ] as const,
  fullPath: 'geoff.greer.fm/ag' as const,
}

export type AgPackage = typeof agPackage
