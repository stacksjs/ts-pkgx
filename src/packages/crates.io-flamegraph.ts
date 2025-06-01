/**
 * **crates.io-flamegraph** - Go home.
 *
 * @domain `crates.io-flamegraph`
 *
 * @install `pkgx crates.io-flamegraph`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesioflamegraph
 * console.log(pkg.name)        // "crates.io-flamegraph"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io-flamegraph.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesioflamegraphPackage = {
  /**
   * The display name of this package.
   */
  name: '' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go home.' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/crates.io-flamegraph/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io-flamegraph' as const,
  fullPath: 'crates.io-flamegraph' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx crates.io-flamegraph' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CratesioflamegraphPackage = typeof cratesioflamegraphPackage
