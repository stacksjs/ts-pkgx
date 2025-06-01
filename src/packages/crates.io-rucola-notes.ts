/**
 * **crates.io-rucola-notes** - Go home.
 *
 * @domain `crates.io-rucola-notes`
 *
 * @install `pkgx crates.io-rucola-notes`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiorucolanotes
 * console.log(pkg.name)        // "crates.io-rucola-notes"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io-rucola-notes.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiorucolanotesPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/crates.io-rucola-notes/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io-rucola-notes' as const,
  fullPath: 'crates.io-rucola-notes' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx crates.io-rucola-notes' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CratesiorucolanotesPackage = typeof cratesiorucolanotesPackage
