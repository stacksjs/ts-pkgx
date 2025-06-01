/**
 * **crates.io-ox** - Go home.
 *
 * @domain `crates.io-ox`
 *
 * @install `pkgx crates.io-ox`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesioox
 * console.log(pkg.name)        // "crates.io-ox"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io-ox.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiooxPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/crates.io-ox/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io-ox' as const,
  fullPath: 'crates.io-ox' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx crates.io-ox' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CratesiooxPackage = typeof cratesiooxPackage
