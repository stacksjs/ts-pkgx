/**
 * **minikube** - Run a Kubernetes cluster locally
 *
 * @domain `kubernetes.io/minikube`
 * @programs `minikube`
 * @version `1.36.0` (12 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install minikube`
 * @name `minikube`
 * @dependencies `kubernetes.io/kubectl`, `go.dev^1.19`, `github.com/kevinburke/go-bindata`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.minikube
 * // Or access via domain
 * const samePkg = pantry.kubernetesiominikube
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "minikube"
 * console.log(pkg.description) // "Run a Kubernetes cluster locally"
 * console.log(pkg.programs)    // ["minikube"]
 * console.log(pkg.versions[0]) // "1.36.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kubernetes-io/minikube.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const minikubePackage = {
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
  description: 'Run a Kubernetes cluster locally' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kubernetes.io/minikube/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install minikube' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'minikube',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'kubernetes.io/kubectl',
    'go.dev^1.19',
    'github.com/kevinburke/go-bindata',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.36.0',
    '1.35.0',
    '1.34.0',
    '1.33.1',
    '1.33.0',
    '1.32.0',
    '1.31.2',
    '1.31.1',
    '1.31.0',
    '1.30.1',
    '1.30.0',
    '1.29.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type MinikubePackage = typeof minikubePackage
