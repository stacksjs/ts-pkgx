/**
 * **git-filter-repo** - Package from pantry: github.com/newren/git-filter-repo
 *
 * @domain `github.com/newren/git-filter-repo`
 *
 * @install `launchpad install github.com/newren/git-filter-repo`
 * @dependencies `python.org>=3.6`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomnewrengitfilterrepo
 * console.log(pkg.name)        // "git-filter-repo"
 * console.log(pkg.description) // "Package from pantry: github.com/newren/git-filt..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/newren/git-filter-repo.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomnewrengitfilterrepoPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-filter-repo' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/newren/git-filter-repo' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/newren/git-filter-repo' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/newren/git-filter-repo' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/newren/git-filter-repo -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/newren/git-filter-repo' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.6',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/newren/git-filter-repo/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomnewrengitfilterrepoPackage = typeof githubcomnewrengitfilterrepoPackage
