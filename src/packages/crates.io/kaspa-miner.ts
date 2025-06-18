/**
 * **kaspa-miner** - A fast CPU miner for Kaspa
 *
 * @domain `crates.io/kaspa-miner`
 * @programs `kaspa-miner`
 * @version `0.2.5` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install kaspa-miner`
 * @name `kaspa-miner`
 * @dependencies `rust-lang.org>=1.56`, `rust-lang.org/cargo`, `protobuf.dev@25`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.kaspaminer
 * // Or access via domain
 * const samePkg = pantry.cratesiokaspaminer
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "kaspa-miner"
 * console.log(pkg.description) // "A fast CPU miner for Kaspa"
 * console.log(pkg.programs)    // ["kaspa-miner"]
 * console.log(pkg.versions[0]) // "0.2.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/kaspa-miner.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kaspaminerPackage = {
  /**
   * The display name of this package.
   */
  name: 'kaspa-miner' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/kaspa-miner' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A fast CPU miner for Kaspa' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/kaspa-miner/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install kaspa-miner' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'kaspa-miner',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'rust-lang.org>=1.56',
    'rust-lang.org/cargo',
    'protobuf.dev@25',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.2.5',
    '0.2.4',
    '0.2.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type KaspaminerPackage = typeof kaspaminerPackage
