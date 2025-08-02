/**
 * **git-sizer** - Package from pantry: github.com/github/git-sizer
 *
 * @domain `github.com/github/git-sizer`
 *
 * @install `launchpad install github.com/github/git-sizer`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomgithubgitsizer
 * console.log(pkg.name)        // "git-sizer"
 * console.log(pkg.description) // "Package from pantry: github.com/github/git-sizer"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/github/git-sizer.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomgithubgitsizerPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-sizer' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/github/git-sizer' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/github/git-sizer' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/github/git-sizer' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/github/git-sizer -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/github/git-sizer' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/github/git-sizer/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomgithubgitsizerPackage = typeof githubcomgithubgitsizerPackage
