/**
 * **crates.io-cargo-tarpaulin** - Go home.
 *
 * @domain `crates.io-cargo-tarpaulin`
 *
 * @install `pkgx crates.io-cargo-tarpaulin`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiocargotarpaulin
 * console.log(pkg.name)        // "crates.io-cargo-tarpaulin"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io-cargo-tarpaulin.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiocargotarpaulinPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/crates.io-cargo-tarpaulin/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io-cargo-tarpaulin' as const,
  fullPath: 'crates.io-cargo-tarpaulin' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx crates.io-cargo-tarpaulin' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CratesiocargotarpaulinPackage = typeof cratesiocargotarpaulinPackage
