/**
 * **cargo** - The Rust package manager
 *
 * @domain `rust-lang.org/cargo`
 * @programs `cargo`
 * @version `0.91.0` (29 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install cargo`
 * @name `cargo`
 * @dependencies `zlib.net^1`, `libgit2.org~1.7 # links to libgit2.so.1.7`, `curl.se/ca-certs`, ... (+2 more) (includes OS-specific dependencies with `os:package` format)
 * @companions `git-scm.org`, `rust-lang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cargo
 * // Or access via domain
 * const samePkg = pantry.rustlangorgcargo
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cargo"
 * console.log(pkg.description) // "The Rust package manager"
 * console.log(pkg.programs)    // ["cargo"]
 * console.log(pkg.versions[0]) // "0.91.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rust-lang-org/cargo.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cargoPackage = {
  /**
   * The display name of this package.
   */
  name: 'cargo' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rust-lang.org/cargo' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The Rust package manager' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rust-lang.org/cargo/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cargo' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cargo',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'git-scm.org',
    'rust-lang.org',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'zlib.net^1',
    'libgit2.org~1.7 # links to libgit2.so.1.7',
    'curl.se/ca-certs',
    'linux:llvm.org',
    'linux:curl.se',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.91.0',
    '0.90.0',
    '0.89.0',
    '0.88.0',
    '0.87.0',
    '0.86.0',
    '0.85.0',
    '0.84.0',
    '0.83.0',
    '0.82.0',
    '0.81.0',
    '0.80.0',
    '0.79.0',
    '0.78.1',
    '0.78.0',
    '0.77.0',
    '0.76.0',
    '0.75.0',
    '0.74.0',
    '0.73.1',
    '0.72.1',
    '0.72.0',
    '0.71.0',
    '0.70.1',
    '0.70.0',
    '0.69.1',
    '0.69.0',
    '0.66.0',
    '0.65.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) cargo -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cargo' as const,
}

export type CargoPackage = typeof cargoPackage
