/**
 * **crates.io-samply** - Go home.
 *
 * @domain `crates.io-samply`
 *
 * @install `pkgx crates.io-samply`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiosamply
 * console.log(pkg.name)        // "crates.io-samply"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io-samply.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiosamplyPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/crates.io-samply/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io-samply' as const,
  fullPath: 'crates.io-samply' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx crates.io-samply' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CratesiosamplyPackage = typeof cratesiosamplyPackage
