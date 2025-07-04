/**
 * **minikube** - Package from pantry: kubernetes.io/minikube
 *
 * @domain `kubernetes.io/minikube`
 *
 * @install `launchpad install kubernetes.io/minikube`
 * @dependencies `kubernetes.io/kubectl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kubernetesiominikube
 * console.log(pkg.name)        // "minikube"
 * console.log(pkg.description) // "Package from pantry: kubernetes.io/minikube"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kubernetes-io/minikube.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kubernetesiominikubePackage = {
  /**
   * The display name of this package.
   */
  name: 'minikube' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kubernetes.io/minikube' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: kubernetes.io/minikube' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install kubernetes.io/minikube' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +kubernetes.io/minikube -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install kubernetes.io/minikube' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kubernetes.io/minikube/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type KubernetesiominikubePackage = typeof kubernetesiominikubePackage
