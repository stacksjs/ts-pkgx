/**
 * **kubeconform** - Package from pantry: github.com/yannh/kubeconform
 *
 * @domain `github.com/yannh/kubeconform`
 *
 * @install `launchpad install github.com/yannh/kubeconform`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomyannhkubeconform
 * console.log(pkg.name)        // "kubeconform"
 * console.log(pkg.description) // "Package from pantry: github.com/yannh/kubeconform"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/yannh/kubeconform.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomyannhkubeconformPackage = {
  /**
   * The display name of this package.
   */
  name: 'kubeconform' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/yannh/kubeconform' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/yannh/kubeconform' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/yannh/kubeconform' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/yannh/kubeconform -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/yannh/kubeconform' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/yannh/kubeconform/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomyannhkubeconformPackage = typeof githubcomyannhkubeconformPackage
