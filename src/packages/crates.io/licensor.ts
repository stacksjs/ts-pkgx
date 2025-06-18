/**
 * **licensor** - write licenses to stdout
 *
 * @domain `crates.io/licensor`
 * @programs `licensor`
 * @version `2.1.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install licensor`
 * @name `licensor`
 * @dependencies `zlib.net^1`, `rust-lang.org>=1.31`, `rust-lang.org/cargo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.licensor
 * // Or access via domain
 * const samePkg = pantry.cratesiolicensor
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "licensor"
 * console.log(pkg.description) // "write licenses to stdout"
 * console.log(pkg.programs)    // ["licensor"]
 * console.log(pkg.versions[0]) // "2.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/licensor.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const licensorPackage = {
  /**
   * The display name of this package.
   */
  name: 'licensor' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/licensor' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'write licenses to stdout' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/licensor/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install licensor' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'licensor',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
    'rust-lang.org>=1.31',
    'rust-lang.org/cargo',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.1.0',
    '2.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type LicensorPackage = typeof licensorPackage
