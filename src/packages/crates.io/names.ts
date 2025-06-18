/**
 * **names** - Random name generator for Rust
 *
 * @domain `crates.io/names`
 * @programs `names`
 * @version `0.14.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install names`
 * @name `names`
 * @dependencies `rust-lang.org>=1.56`, `rust-lang.org/cargo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.names
 * // Or access via domain
 * const samePkg = pantry.cratesionames
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "names"
 * console.log(pkg.description) // "Random name generator for Rust"
 * console.log(pkg.programs)    // ["names"]
 * console.log(pkg.versions[0]) // "0.14.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/names.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const namesPackage = {
  /**
   * The display name of this package.
   */
  name: 'names' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/names' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Random name generator for Rust' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/names/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install names' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'names',
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
    '0.14.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type NamesPackage = typeof namesPackage
