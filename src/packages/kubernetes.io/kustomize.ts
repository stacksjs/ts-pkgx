/**
 * **kustomize** - Package from pantry: kubernetes.io/kustomize
 *
 * @domain `kubernetes.io/kustomize`
 *
 * @install `launchpad install kubernetes.io/kustomize`
 * @dependencies `kubernetes.io/kubectl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kubernetesiokustomize
 * console.log(pkg.name)        // "kustomize"
 * console.log(pkg.description) // "Package from pantry: kubernetes.io/kustomize"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kubernetes-io/kustomize.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kubernetesiokustomizePackage = {
  /**
   * The display name of this package.
   */
  name: 'kustomize' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kubernetes.io/kustomize' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: kubernetes.io/kustomize' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install kubernetes.io/kustomize' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +kubernetes.io/kustomize -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install kubernetes.io/kustomize' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'kubernetes.io/kubectl',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kubernetes.io/kustomize/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type KubernetesiokustomizePackage = typeof kubernetesiokustomizePackage
