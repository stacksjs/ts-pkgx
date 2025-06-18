/**
 * **lighthouse** - Ethereum consensus client in Rust
 *
 * @domain `crates.io/lighthouse`
 * @programs `lighthouse`
 * @version `7.0.1` (19 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) lighthouse`
 * @name `lighthouse`
 * @dependencies `zlib.net^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.lighthouse
 * // Or access via domain
 * const samePkg = pantry.cratesiolighthouse
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "lighthouse"
 * console.log(pkg.description) // "Ethereum consensus client in Rust"
 * console.log(pkg.programs)    // ["lighthouse"]
 * console.log(pkg.versions[0]) // "7.0.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/lighthouse.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lighthousePackage = {
  /**
   * The display name of this package.
   */
  name: 'lighthouse' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/lighthouse' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Ethereum consensus client in Rust' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/lighthouse/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) lighthouse' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'lighthouse',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '7.0.1',
    '7.0.0',
    '6.0.1',
    '6.0.0',
    '5.3.0',
    '5.2.1',
    '5.2.0',
    '5.1.3',
    '5.1.2',
    '5.1.1',
    '5.1.0',
    '5.0.0',
    '4.6.0',
    '4.5.0',
    '4.4.1',
    '4.3.0',
    '4.2.0',
    '4.1.0',
    '4.0.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'crates.io/lighthouse' as const,
}

export type LighthousePackage = typeof lighthousePackage
