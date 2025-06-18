/**
 * **kustomize** - Template-free customization of Kubernetes YAML manifests
 *
 * @domain `kubernetes.io/kustomize`
 * @programs `kustomize`
 * @version `5.6.0` (14 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install kustomize`
 * @name `kustomize`
 * @dependencies `kubernetes.io/kubectl`, `go.dev^1.18`, `gnu.org/gcc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.kustomize
 * // Or access via domain
 * const samePkg = pantry.kubernetesiokustomize
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "kustomize"
 * console.log(pkg.description) // "Template-free customization of Kubernetes YAML ..."
 * console.log(pkg.programs)    // ["kustomize"]
 * console.log(pkg.versions[0]) // "5.6.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kubernetes-io/kustomize.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kustomizePackage = {
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
  description: 'Template-free customization of Kubernetes YAML manifests' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kubernetes.io/kustomize/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install kustomize' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'kustomize',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'kubernetes.io/kubectl',
    'go.dev^1.18',
    'gnu.org/gcc',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.6.0',
    '5.5.0',
    '5.4.3',
    '5.4.2',
    '5.4.1',
    '5.4.0',
    '5.3.0',
    '5.2.1',
    '5.2.0',
    '5.1.1',
    '5.1.0',
    '5.0.3',
    '5.0.2',
    '5.0.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type KustomizePackage = typeof kustomizePackage
