/**
 * **ronn** - the opposite of roff
 *
 * @domain `rtomayko.github.io/ronn`
 * @programs `ronn`
 * @version `0.7.3` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install ronn`
 * @name `ronn`
 * @dependencies `ruby-lang.org^3.1`, `rubygems.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ronn
 * // Or access via domain
 * const samePkg = pantry.rtomaykogithubioronn
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ronn"
 * console.log(pkg.description) // "the opposite of roff"
 * console.log(pkg.programs)    // ["ronn"]
 * console.log(pkg.versions[0]) // "0.7.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rtomayko-github-io/ronn.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ronnPackage = {
  /**
   * The display name of this package.
   */
  name: 'ronn' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rtomayko.github.io/ronn' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'the opposite of roff' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rtomayko.github.io/ronn/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install ronn' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ronn',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'ruby-lang.org^3.1',
    'rubygems.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.7.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type RonnPackage = typeof ronnPackage
