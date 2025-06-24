/**
 * **git-tidy** - Package from pantry: crates.io/git-tidy
 *
 * @domain `crates.io/git-tidy`
 *
 * @install `launchpad install crates.io/git-tidy`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiogittidy
 * console.log(pkg.name)        // "git-tidy"
 * console.log(pkg.description) // "Package from pantry: crates.io/git-tidy"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/git-tidy.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiogittidyPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-tidy' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/git-tidy' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/git-tidy' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/git-tidy' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/git-tidy -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/git-tidy' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/git-tidy/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiogittidyPackage = typeof cratesiogittidyPackage
