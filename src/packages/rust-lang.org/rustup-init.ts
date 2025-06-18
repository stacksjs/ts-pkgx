/**
 * **rustup** - The Rust toolchain installer
 *
 * @domain `rust-lang.org/rustup-init`
 * @programs `rustup`, `rustup-init`
 * @version `1.27.1` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +rust-lang.org/rustup-init -- $SHELL -i`
 * @name `rustup`
 * @aliases `rustup-init`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.rustup
 * // Or access via domain
 * const samePkg = pantry.rustlangorgrustupinit
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rustup"
 * console.log(pkg.description) // "The Rust toolchain installer"
 * console.log(pkg.programs)    // ["rustup", "rustup-init"]
 * console.log(pkg.versions[0]) // "1.27.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rust-lang-org/rustup-init.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rustupPackage = {
  /**
   * The display name of this package.
   */
  name: 'rustup' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rust-lang.org/rustup-init' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The Rust toolchain installer' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rust-lang.org/rustup-init/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +rust-lang.org/rustup-init -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'rustup',
    'rustup-init',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.27.1',
    '1.27.0',
    '1.26.0',
    '1.25.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'rustup-init',
  ] as const,
  fullPath: 'rust-lang.org/rustup-init' as const,
}

export type RustupPackage = typeof rustupPackage
