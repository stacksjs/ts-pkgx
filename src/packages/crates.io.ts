/**
 * **crates.io** - Go home.
 *
 * @domain `crates.io`
 *
 * @install `pkgx crates.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesio
 * console.log(pkg.name)        // "crates.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/crates.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io' as const,
  fullPath: 'crates.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx crates.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CratesioPackage = typeof cratesioPackage
