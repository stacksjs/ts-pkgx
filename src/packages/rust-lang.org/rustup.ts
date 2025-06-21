/**
 * **rustup** - Package from pantry: rust-lang.org/rustup
 *
 * @domain `rust-lang.org/rustup`
 *
 * @install `launchpad install rust-lang.org/rustup`
 * @dependencies `linux:curl.se` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rustlangorgrustup
 * console.log(pkg.name)        // "rustup"
 * console.log(pkg.description) // "Package from pantry: rust-lang.org/rustup"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rust-lang-org/rustup.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rustlangorgrustupPackage = {
  /**
   * The display name of this package.
   */
  name: 'rustup' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rust-lang.org/rustup' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: rust-lang.org/rustup' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install rust-lang.org/rustup' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:curl.se',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rust-lang.org/rustup/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type RustlangorgrustupPackage = typeof rustlangorgrustupPackage
