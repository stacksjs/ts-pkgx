/**
 * **rust-lang.org-rust-bindgen** - Go home.
 *
 * @domain `rust-lang.org-rust-bindgen`
 *
 * @install `pkgx rust-lang.org-rust-bindgen`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rustlangorgrustbindgen
 * console.log(pkg.name)        // "rust-lang.org-rust-bindgen"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rust-lang-org-rust-bindgen.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rustlangorgrustbindgenPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/rust-lang.org-rust-bindgen/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rust-lang.org-rust-bindgen' as const,
  fullPath: 'rust-lang.org-rust-bindgen' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx rust-lang.org-rust-bindgen' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type RustlangorgrustbindgenPackage = typeof rustlangorgrustbindgenPackage
