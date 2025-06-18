/**
 * **flamegraph** - Easy flamegraphs for Rust projects and everything else, without Perl or pipes <3
 *
 * @domain `crates.io/flamegraph`
 * @programs `flamegraph`, `cargo-flamegraph`
 * @version `0.6.8` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +crates.io/flamegraph -- $SHELL -i`
 * @aliases `flamegraph`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.flamegraph
 * // Or access via domain
 * const samePkg = pantry.cratesioflamegraph
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "crates.io/flamegraph"
 * console.log(pkg.description) // "Easy flamegraphs for Rust projects and everythi..."
 * console.log(pkg.programs)    // ["flamegraph", "cargo-flamegraph"]
 * console.log(pkg.versions[0]) // "0.6.8" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/flamegraph.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const flamegraphPackage = {
  /**
   * The display name of this package.
   */
  name: 'crates.io/flamegraph' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/flamegraph' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Easy flamegraphs for Rust projects and everything else, without Perl or pipes <3' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/flamegraph/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +crates.io/flamegraph -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'flamegraph',
    'cargo-flamegraph',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.6.8',
    '0.6.7',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'flamegraph',
  ] as const,
  fullPath: 'crates.io/flamegraph' as const,
}

export type FlamegraphPackage = typeof flamegraphPackage
