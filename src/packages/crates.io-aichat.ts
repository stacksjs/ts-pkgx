/**
 * **crates.io-aichat** - Go home.
 *
 * @domain `crates.io-aichat`
 *
 * @install `pkgx crates.io-aichat`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesioaichat
 * console.log(pkg.name)        // "crates.io-aichat"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io-aichat.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesioaichatPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/crates.io-aichat/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io-aichat' as const,
  fullPath: 'crates.io-aichat' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx crates.io-aichat' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CratesioaichatPackage = typeof cratesioaichatPackage
