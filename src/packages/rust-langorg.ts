/**
 * **rust** - Empowering everyone to build reliable and efficient software.
 *
 * @domain `rust-lang.org`
 * @programs `cargo-clippy`, `cargo-fmt`, `clippy-driver`, `rust-analyzer`, `rust-gdb`, ... (+5 more)
 * @version `1.90.0` (37 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install rust`
 * @name `rust`
 * @dependencies `zlib.net@1`
 * @companions `rust-lang.org/cargo`, `linux`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.rust
 * // Or access via domain
 * const samePkg = pantry.rustlangorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rust"
 * console.log(pkg.description) // "Empowering everyone to build reliable and effic..."
 * console.log(pkg.programs)    // ["cargo-clippy", "cargo-fmt", ...]
 * console.log(pkg.versions[0]) // "1.90.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rust-lang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rustPackage = {
  /**
   * The display name of this package.
   */
  name: 'rust' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rust-lang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Empowering everyone to build reliable and efficient software.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rust-lang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install rust' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cargo-clippy',
    'cargo-fmt',
    'clippy-driver',
    'rust-analyzer',
    'rust-gdb',
    'rust-gdbgui',
    'rust-lldb',
    'rustc',
    'rustdoc',
    'rustfmt',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'rust-lang.org/cargo',
    'linux',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net@1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.90.0',
    '1.89.0',
    '1.88.0',
    '1.87.0',
    '1.86.0',
    '1.85.1',
    '1.85.0',
    '1.84.1',
    '1.84.0',
    '1.83.0',
    '1.82.0',
    '1.81.0',
    '1.80.1',
    '1.80.0',
    '1.79.0',
    '1.78.0',
    '1.77.2',
    '1.77.1',
    '1.77.0',
    '1.76.0',
    '1.75.0',
    '1.74.1',
    '1.74.0',
    '1.73.0',
    '1.72.1',
    '1.72.0',
    '1.71.1',
    '1.71.0',
    '1.70.0',
    '1.69.0',
    '1.68.2',
    '1.68.1',
    '1.68.0',
    '1.67.1',
    '1.67.0',
    '1.65.0',
    '1.64.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +rust-lang.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install rust' as const,
}

export type RustPackage = typeof rustPackage
