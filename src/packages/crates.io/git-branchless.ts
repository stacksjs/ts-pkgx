/**
 * **git-branchless** - Package from pantry: crates.io/git-branchless
 *
 * @domain `crates.io/git-branchless`
 *
 * @install `launchpad install crates.io/git-branchless`
 * @dependencies `libgit2.org@1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiogitbranchless
 * console.log(pkg.name)        // "git-branchless"
 * console.log(pkg.description) // "Package from pantry: crates.io/git-branchless"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/git-branchless.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiogitbranchlessPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-branchless' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/git-branchless' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/git-branchless' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/git-branchless' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/git-branchless -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/git-branchless' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libgit2.org@1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/git-branchless/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiogitbranchlessPackage = typeof cratesiogitbranchlessPackage
