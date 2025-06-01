/**
 * **crates.io-ducker** - Go home.
 *
 * @domain `crates.io-ducker`
 *
 * @install `pkgx crates.io-ducker`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesioducker
 * console.log(pkg.name)        // "crates.io-ducker"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io-ducker.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesioduckerPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/crates.io-ducker/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io-ducker' as const,
  fullPath: 'crates.io-ducker' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx crates.io-ducker' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CratesioduckerPackage = typeof cratesioduckerPackage
