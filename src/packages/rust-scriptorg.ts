/**
 * **rust-script.org** - Package from pantry: rust-script.org
 *
 * @domain `rust-script.org`
 *
 * @install `launchpad install rust-script.org`
 * @dependencies `rust-lang.org>=1.64`, `rust-lang.org/cargo`, `pkgx.sh^1`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rustscriptorg
 * console.log(pkg.name)        // "rust-script.org"
 * console.log(pkg.description) // "Package from pantry: rust-script.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rust-script-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rustscriptorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'rust-script.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rust-script.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: rust-script.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install rust-script.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'rust-lang.org>=1.64',
    'rust-lang.org/cargo',
    'pkgx.sh^1',
    'gnu.org/sed',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rust-script.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type RustscriptorgPackage = typeof rustscriptorgPackage
