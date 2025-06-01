/**
 * **crates.io-pik** - Go home.
 *
 * @domain `crates.io-pik`
 *
 * @install `pkgx crates.io-pik`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiopik
 * console.log(pkg.name)        // "crates.io-pik"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io-pik.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiopikPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/crates.io-pik/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io-pik' as const,
  fullPath: 'crates.io-pik' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx crates.io-pik' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CratesiopikPackage = typeof cratesiopikPackage
