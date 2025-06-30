/**
 * **diff-so-fancy** - Package from pantry: github.com/so-fancy/diff-so-fancy
 *
 * @domain `github.com/so-fancy/diff-so-fancy`
 *
 * @install `launchpad install github.com/so-fancy/diff-so-fancy`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomsofancydiffsofancy
 * console.log(pkg.name)        // "diff-so-fancy"
 * console.log(pkg.description) // "Package from pantry: github.com/so-fancy/diff-s..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/so-fancy/diff-so-fancy.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomsofancydiffsofancyPackage = {
  /**
   * The display name of this package.
   */
  name: 'diff-so-fancy' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/so-fancy/diff-so-fancy' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/so-fancy/diff-so-fancy' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/so-fancy/diff-so-fancy' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/so-fancy/diff-so-fancy -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/so-fancy/diff-so-fancy' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/so-fancy/diff-so-fancy/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomsofancydiffsofancyPackage = typeof githubcomsofancydiffsofancyPackage
