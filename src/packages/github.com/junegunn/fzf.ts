/**
 * **fzf** - Package from pantry: github.com/junegunn/fzf
 *
 * @domain `github.com/junegunn/fzf`
 *
 * @install `launchpad install github.com/junegunn/fzf`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomjunegunnfzf
 * console.log(pkg.name)        // "fzf"
 * console.log(pkg.description) // "Package from pantry: github.com/junegunn/fzf"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/junegunn/fzf.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomjunegunnfzfPackage = {
  /**
   * The display name of this package.
   */
  name: 'fzf' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/junegunn/fzf' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/junegunn/fzf' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/junegunn/fzf' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/junegunn/fzf -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/junegunn/fzf' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/junegunn/fzf/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomjunegunnfzfPackage = typeof githubcomjunegunnfzfPackage
