/**
 * **rust-bindgen** - Package from pantry: rust-lang.org/rust-bindgen
 *
 * @domain `rust-lang.org/rust-bindgen`
 *
 * @install `launchpad install rust-lang.org/rust-bindgen`
 * @dependencies `linux:llvm.org` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rustlangorgrustbindgen
 * console.log(pkg.name)        // "rust-bindgen"
 * console.log(pkg.description) // "Package from pantry: rust-lang.org/rust-bindgen"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rust-lang-org/rust-bindgen.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rustlangorgrustbindgenPackage = {
  /**
   * The display name of this package.
   */
  name: 'rust-bindgen' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rust-lang.org/rust-bindgen' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: rust-lang.org/rust-bindgen' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install rust-lang.org/rust-bindgen' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:llvm.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rust-lang.org/rust-bindgen/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type RustlangorgrustbindgenPackage = typeof rustlangorgrustbindgenPackage
