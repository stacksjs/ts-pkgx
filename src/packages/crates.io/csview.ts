/**
 * **csview** - 📠 Pretty and fast csv viewer for cli with cjk/emoji support.
 *
 * @domain `crates.io/csview`
 * @programs `csview`
 * @version `1.3.4` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install csview`
 * @name `csview`
 * @dependencies `rust-lang.org>=1.65`, `rust-lang.org/cargo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.csview
 * // Or access via domain
 * const samePkg = pantry.cratesiocsview
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "csview"
 * console.log(pkg.description) // "📠 Pretty and fast csv viewer for cli with cjk/..."
 * console.log(pkg.programs)    // ["csview"]
 * console.log(pkg.versions[0]) // "1.3.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/csview.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const csviewPackage = {
  /**
   * The display name of this package.
   */
  name: 'csview' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/csview' as const,
  /**
   * Brief description of what this package does.
   */
  description: '📠 Pretty and fast csv viewer for cli with cjk/emoji support.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/csview/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install csview' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'csview',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'rust-lang.org>=1.65',
    'rust-lang.org/cargo',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.4',
    '1.3.3',
    '1.3.2',
    '1.3.1',
    '1.3.0',
    '1.2.4',
    '1.2.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type CsviewPackage = typeof csviewPackage
