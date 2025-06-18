/**
 * **rust-lang.org** - Package from pantry: rust-lang.org
 *
 * @domain `rust-lang.org`
 *
 * @install `launchpad install rust-lang.org`
 * @dependencies `zlib.net^1`, `cmake.org^3.20`, `ninja-build.org^1.10`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rustlangorg
 * console.log(pkg.name)        // "rust-lang.org"
 * console.log(pkg.description) // "Package from pantry: rust-lang.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rust-lang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rustlangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'rust-lang.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rust-lang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: rust-lang.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install rust-lang.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
    'cmake.org^3.20',
    'ninja-build.org^1.10',
    'python.org>=3<3.12',
    'openssl.org',
    'crates.io/semverator^0',
    'llvm.org^20 # as of 1.87.0',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rust-lang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type RustlangorgPackage = typeof rustlangorgPackage
