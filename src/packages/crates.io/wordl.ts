/**
 * **wordl** - Terminal wordle. Web like GUI with Keyboard hints, guess reveal animations etc.
 *
 * @domain `crates.io/wordl`
 * @programs `wordl`
 * @version `0.3.0` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install wordl`
 * @name `wordl`
 * @dependencies `rust-lang.org>=1.56`, `rust-lang.org/cargo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.wordl
 * // Or access via domain
 * const samePkg = pantry.cratesiowordl
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "wordl"
 * console.log(pkg.description) // "Terminal wordle. Web like GUI with Keyboard hin..."
 * console.log(pkg.programs)    // ["wordl"]
 * console.log(pkg.versions[0]) // "0.3.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/wordl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wordlPackage = {
  /**
   * The display name of this package.
   */
  name: 'wordl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/wordl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Terminal wordle. Web like GUI with Keyboard hints, guess reveal animations etc.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/wordl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install wordl' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'wordl',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'rust-lang.org>=1.56',
    'rust-lang.org/cargo',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.3.0',
    '0.2.0',
    '0.1.6',
    '0.1.5',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type WordlPackage = typeof wordlPackage
