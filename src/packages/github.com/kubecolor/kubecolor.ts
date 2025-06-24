/**
 * **kubecolor** - Package from pantry: github.com/kubecolor/kubecolor
 *
 * @domain `github.com/kubecolor/kubecolor`
 *
 * @install `launchpad install github.com/kubecolor/kubecolor`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomkubecolorkubecolor
 * console.log(pkg.name)        // "kubecolor"
 * console.log(pkg.description) // "Package from pantry: github.com/kubecolor/kubec..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/kubecolor/kubecolor.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomkubecolorkubecolorPackage = {
  /**
   * The display name of this package.
   */
  name: 'kubecolor' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/kubecolor/kubecolor' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/kubecolor/kubecolor' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/kubecolor/kubecolor' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/kubecolor/kubecolor -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/kubecolor/kubecolor' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/kubecolor/kubecolor/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomkubecolorkubecolorPackage = typeof githubcomkubecolorkubecolorPackage
