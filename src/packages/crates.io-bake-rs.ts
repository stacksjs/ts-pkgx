/**
 * **crates.io-bake-rs** - Go home.
 *
 * @domain `crates.io-bake-rs`
 *
 * @install `pkgx crates.io-bake-rs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiobakers
 * console.log(pkg.name)        // "crates.io-bake-rs"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io-bake-rs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiobakersPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/crates.io-bake-rs/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io-bake-rs' as const,
  fullPath: 'crates.io-bake-rs' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx crates.io-bake-rs' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CratesiobakersPackage = typeof cratesiobakersPackage
