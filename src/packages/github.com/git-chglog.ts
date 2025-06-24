/**
 * **git-chglog** - Package from pantry: github.com/git-chglog
 *
 * @domain `github.com/git-chglog`
 *
 * @install `launchpad install github.com/git-chglog`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomgitchglog
 * console.log(pkg.name)        // "git-chglog"
 * console.log(pkg.description) // "Package from pantry: github.com/git-chglog"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/git-chglog.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomgitchglogPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-chglog' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/git-chglog' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/git-chglog' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/git-chglog' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/git-chglog -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/git-chglog' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/git-chglog/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomgitchglogPackage = typeof githubcomgitchglogPackage
