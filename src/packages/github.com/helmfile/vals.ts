/**
 * **vals** - Package from pantry: github.com/helmfile/vals
 *
 * @domain `github.com/helmfile/vals`
 *
 * @install `launchpad install github.com/helmfile/vals`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomhelmfilevals
 * console.log(pkg.name)        // "vals"
 * console.log(pkg.description) // "Package from pantry: github.com/helmfile/vals"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/helmfile/vals.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomhelmfilevalsPackage = {
  /**
   * The display name of this package.
   */
  name: 'vals' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/helmfile/vals' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/helmfile/vals' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/helmfile/vals' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/helmfile/vals -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/helmfile/vals' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/helmfile/vals/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomhelmfilevalsPackage = typeof githubcomhelmfilevalsPackage
