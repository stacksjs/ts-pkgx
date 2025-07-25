/**
 * **drill** - Drill is an HTTP load testing application written in Rust
 *
 * @domain `crates.io/drill`
 * @programs `drill`
 * @version `0.8.3` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install drill`
 * @name `drill`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.drill
 * // Or access via domain
 * const samePkg = pantry.cratesiodrill
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "drill"
 * console.log(pkg.description) // "Drill is an HTTP load testing application writt..."
 * console.log(pkg.programs)    // ["drill"]
 * console.log(pkg.versions[0]) // "0.8.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/drill.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const drillPackage = {
  /**
   * The display name of this package.
   */
  name: 'drill' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/drill' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Drill is an HTTP load testing application written in Rust' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/drill/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install drill' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'drill',
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
    '0.8.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) drill -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install drill' as const,
}

export type DrillPackage = typeof drillPackage
