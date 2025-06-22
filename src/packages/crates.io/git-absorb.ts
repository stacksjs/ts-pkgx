/**
 * **git-absorb** - Package from pantry: crates.io/git-absorb
 *
 * @domain `crates.io/git-absorb`
 *
 * @install `launchpad install crates.io/git-absorb`
 * @dependencies `libgit2.org~1.7 # links to libgit2.so.1.7`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiogitabsorb
 * console.log(pkg.name)        // "git-absorb"
 * console.log(pkg.description) // "Package from pantry: crates.io/git-absorb"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/git-absorb.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiogitabsorbPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-absorb' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/git-absorb' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/git-absorb' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/git-absorb' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/git-absorb -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/git-absorb' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/git-absorb/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiogitabsorbPackage = typeof cratesiogitabsorbPackage
