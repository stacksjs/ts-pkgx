/**
 * **kubectl** - Package from pantry: kubernetes.io/kubectl
 *
 * @domain `kubernetes.io/kubectl`
 *
 * @install `launchpad install kubernetes.io/kubectl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kubernetesiokubectl
 * console.log(pkg.name)        // "kubectl"
 * console.log(pkg.description) // "Package from pantry: kubernetes.io/kubectl"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kubernetes-io/kubectl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kubernetesiokubectlPackage = {
  /**
   * The display name of this package.
   */
  name: 'kubectl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kubernetes.io/kubectl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: kubernetes.io/kubectl' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install kubernetes.io/kubectl' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +kubernetes.io/kubectl -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install kubernetes.io/kubectl' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kubernetes.io/kubectl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type KubernetesiokubectlPackage = typeof kubernetesiokubectlPackage
