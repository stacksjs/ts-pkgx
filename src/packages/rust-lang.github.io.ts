/**
 * **rust-lang.github.io** - Go home.
 *
 * @domain `rust-lang.github.io`
 *
 * @install `pkgx rust-lang.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rustlanggithubio
 * console.log(pkg.name)        // "rust-lang.github.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rust-lang-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rustlanggithubioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/rust-lang.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rust-lang.github.io' as const,
  fullPath: 'rust-lang.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx rust-lang.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type RustlanggithubioPackage = typeof rustlanggithubioPackage
