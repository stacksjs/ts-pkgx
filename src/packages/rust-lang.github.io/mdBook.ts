/**
 * **mdBook** - Package from pantry: rust-lang.github.io/mdBook
 *
 * @domain `rust-lang.github.io/mdBook`
 *
 * @install `launchpad install rust-lang.github.io/mdBook`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rustlanggithubiomdbook
 * console.log(pkg.name)        // "mdBook"
 * console.log(pkg.description) // "Package from pantry: rust-lang.github.io/mdBook"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rust-lang-github-io/mdBook.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rustlanggithubiomdbookPackage = {
  /**
   * The display name of this package.
   */
  name: 'mdBook' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rust-lang.github.io/mdBook' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: rust-lang.github.io/mdBook' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install rust-lang.github.io/mdBook' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +rust-lang.github.io/mdBook -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install rust-lang.github.io/mdBook' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rust-lang.github.io/mdBook/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type RustlanggithubiomdbookPackage = typeof rustlanggithubiomdbookPackage
