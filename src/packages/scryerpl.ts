/**
 * **scryer-prolog** - Modern ISO Prolog implementation written mostly in Rust
 *
 * @domain `scryer.pl`
 * @programs `scryer-prolog`
 * @version `0.9.4` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install scryer-prolog`
 * @aliases `scryer-prolog`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.scryerprolog
 * // Or access via domain
 * const samePkg = pantry.scryerpl
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "scryer.pl"
 * console.log(pkg.description) // "Modern ISO Prolog implementation written mostly..."
 * console.log(pkg.programs)    // ["scryer-prolog"]
 * console.log(pkg.versions[0]) // "0.9.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/scryer-pl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const scryerprologPackage = {
  /**
   * The display name of this package.
   */
  name: 'scryer.pl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'scryer.pl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Modern ISO Prolog implementation written mostly in Rust' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/scryer.pl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install scryer-prolog' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'scryer-prolog',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.9.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'scryer-prolog',
  ] as const,
}

export type ScryerprologPackage = typeof scryerprologPackage
