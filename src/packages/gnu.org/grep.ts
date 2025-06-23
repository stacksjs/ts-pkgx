/**
 * **grep** - pkgx package
 *
 * @domain `gnu.org/grep`
 * @programs `grep`
 * @version `3.12.0` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install grep`
 * @name `grep`
 * @dependencies `pcre.org/v2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.grep
 * // Or access via domain
 * const samePkg = pantry.gnuorggrep
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "grep"
 * console.log(pkg.programs)    // ["grep"]
 * console.log(pkg.versions[0]) // "3.12.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/grep.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const grepPackage = {
  /**
   * The display name of this package.
   */
  name: 'grep' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/grep' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A command-line utility for searching plain-text data sets for lines that match a regular expression' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/grep/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install grep' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'grep',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pcre.org/v2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.12.0',
    '3.11.0',
    '3.8.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) grep -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install grep' as const,
}

export type GrepPackage = typeof grepPackage
