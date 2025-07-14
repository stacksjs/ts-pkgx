/**
 * **kube-capacity** - Package from pantry: github.com/robscott/kube-capacity
 *
 * @domain `github.com/robscott/kube-capacity`
 *
 * @install `launchpad install github.com/robscott/kube-capacity`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomrobscottkubecapacity
 * console.log(pkg.name)        // "kube-capacity"
 * console.log(pkg.description) // "Package from pantry: github.com/robscott/kube-c..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/robscott/kube-capacity.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomrobscottkubecapacityPackage = {
  /**
   * The display name of this package.
   */
  name: 'kube-capacity' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/robscott/kube-capacity' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/robscott/kube-capacity' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/robscott/kube-capacity' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/robscott/kube-capacity -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/robscott/kube-capacity' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/robscott/kube-capacity/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomrobscottkubecapacityPackage = typeof githubcomrobscottkubecapacityPackage
