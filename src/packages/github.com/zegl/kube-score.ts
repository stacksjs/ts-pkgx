/**
 * **kube-score** - Package from pantry: github.com/zegl/kube-score
 *
 * @domain `github.com/zegl/kube-score`
 *
 * @install `launchpad install github.com/zegl/kube-score`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomzeglkubescore
 * console.log(pkg.name)        // "kube-score"
 * console.log(pkg.description) // "Package from pantry: github.com/zegl/kube-score"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/zegl/kube-score.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomzeglkubescorePackage = {
  /**
   * The display name of this package.
   */
  name: 'kube-score' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/zegl/kube-score' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/zegl/kube-score' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/zegl/kube-score' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/zegl/kube-score -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/zegl/kube-score' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/zegl/kube-score/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomzeglkubescorePackage = typeof githubcomzeglkubescorePackage
