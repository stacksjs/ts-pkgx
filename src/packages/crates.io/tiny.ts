/**
 * **tiny** - A terminal IRC client
 *
 * @domain `crates.io/tiny`
 * @programs `tiny`
 * @version `0.13.0` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install tiny`
 * @name `tiny`
 * @dependencies `openssl.org^1.1`, `rust-lang.org^1.65`, `rust-lang.org/cargo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.tiny
 * // Or access via domain
 * const samePkg = pantry.cratesiotiny
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tiny"
 * console.log(pkg.description) // "A terminal IRC client"
 * console.log(pkg.programs)    // ["tiny"]
 * console.log(pkg.versions[0]) // "0.13.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/tiny.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tinyPackage = {
  /**
   * The display name of this package.
   */
  name: 'tiny' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/tiny' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A terminal IRC client' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/tiny/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install tiny' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'tiny',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'rust-lang.org^1.65',
    'rust-lang.org/cargo',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.13.0',
    '0.12.0',
    '0.11.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type TinyPackage = typeof tinyPackage
