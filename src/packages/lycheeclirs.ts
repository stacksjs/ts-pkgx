/**
 * **lychee** - ⚡ Fast, async, stream-based link checker written in Rust. Finds broken URLs and mail addresses inside Markdown, HTML, reStructuredText, websites and more!
 *
 * @domain `lychee.cli.rs`
 * @programs `lychee`
 * @version `0.15.1` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install lychee`
 * @aliases `lychee`
 * @dependencies `openssl.org>=1.1`, `rust-lang.org^1.65`, `rust-lang.org/cargo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.lychee
 * // Or access via domain
 * const samePkg = pantry.lycheeclirs
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "lychee.cli.rs"
 * console.log(pkg.description) // "⚡ Fast, async, stream-based link checker writte..."
 * console.log(pkg.programs)    // ["lychee"]
 * console.log(pkg.versions[0]) // "0.15.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lychee-cli-rs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lycheePackage = {
  /**
   * The display name of this package.
   */
  name: 'lychee.cli.rs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'lychee.cli.rs' as const,
  /**
   * Brief description of what this package does.
   */
  description: '⚡ Fast, async, stream-based link checker written in Rust. Finds broken URLs and mail addresses inside Markdown, HTML, reStructuredText, websites and more!' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/lychee.cli.rs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/lycheeverse/lychee' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install lychee' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'lychee',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org>=1.1',
    'rust-lang.org^1.65',
    'rust-lang.org/cargo',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.15.1',
    '0.15.0',
    '0.14.3',
    '0.14.2',
    '0.14.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'lychee',
  ] as const,
}

export type LycheePackage = typeof lycheePackage
