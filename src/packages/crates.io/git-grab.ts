/**
 * **git-grab** - Package from pantry: crates.io/git-grab
 *
 * @domain `crates.io/git-grab`
 *
 * @install `launchpad install crates.io/git-grab`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiogitgrab
 * console.log(pkg.name)        // "git-grab"
 * console.log(pkg.description) // "Package from pantry: crates.io/git-grab"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/git-grab.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiogitgrabPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-grab' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/git-grab' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/git-grab' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/git-grab' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/git-grab -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/git-grab' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/git-grab/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiogitgrabPackage = typeof cratesiogitgrabPackage
