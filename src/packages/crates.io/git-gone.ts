/**
 * **git-gone** - Package from pantry: crates.io/git-gone
 *
 * @domain `crates.io/git-gone`
 *
 * @install `launchpad install crates.io/git-gone`
 * @dependencies `libgit2.org~1.7 # links to libgit2.so.1.7`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiogitgone
 * console.log(pkg.name)        // "git-gone"
 * console.log(pkg.description) // "Package from pantry: crates.io/git-gone"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/git-gone.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiogitgonePackage = {
  /**
   * The display name of this package.
   */
  name: 'git-gone' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/git-gone' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/git-gone' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/git-gone' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/git-gone -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/git-gone' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libgit2.org~1.7 # links to libgit2.so.1.7',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/git-gone/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiogitgonePackage = typeof cratesiogitgonePackage
