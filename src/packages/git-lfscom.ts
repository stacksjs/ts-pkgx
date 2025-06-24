/**
 * **git-lfs.com** - Package from pantry: git-lfs.com
 *
 * @domain `git-lfs.com`
 *
 * @install `launchpad install git-lfs.com`
 * @dependencies `git-scm.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gitlfscom
 * console.log(pkg.name)        // "git-lfs.com"
 * console.log(pkg.description) // "Package from pantry: git-lfs.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/git-lfs-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitlfscomPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-lfs.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'git-lfs.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: git-lfs.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install git-lfs.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +git-lfs.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install git-lfs.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'git-scm.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/git-lfs.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GitlfscomPackage = typeof gitlfscomPackage
