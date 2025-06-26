/**
 * **cargo** - Package from pantry: rust-lang.org/cargo
 *
 * @domain `rust-lang.org/cargo`
 *
 * @install `launchpad install rust-lang.org/cargo`
 * @dependencies `zlib.net^1`, `libgit2.org~1.7 # links to libgit2.so.1.7`, `curl.se/ca-certs`, ... (+2 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rustlangorgcargo
 * console.log(pkg.name)        // "cargo"
 * console.log(pkg.description) // "Package from pantry: rust-lang.org/cargo"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rust-lang-org/cargo.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rustlangorgcargoPackage = {
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
  description: 'Package from pantry: rust-lang.org/cargo' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install rust-lang.org/cargo' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +rust-lang.org/cargo -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install rust-lang.org/cargo' as const,
  programs: [] as const,
  companions: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rust-lang.org/cargo/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type RustlangorgcargoPackage = typeof rustlangorgcargoPackage
