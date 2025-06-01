/**
 * **crates.io-qsv** - Go home.
 *
 * @domain `crates.io-qsv`
 *
 * @install `pkgx crates.io-qsv`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesioqsv
 * console.log(pkg.name)        // "crates.io-qsv"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io-qsv.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesioqsvPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/crates.io-qsv/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io-qsv' as const,
  fullPath: 'crates.io-qsv' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx crates.io-qsv' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CratesioqsvPackage = typeof cratesioqsvPackage
