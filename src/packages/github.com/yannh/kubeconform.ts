/**
 * **kubeconform** - A FAST Kubernetes manifests validator, with support for Custom Resources!
 *
 * @domain `github.com/yannh/kubeconform`
 * @programs `kubeconform`
 * @version `0.7.0` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) kubeconform`
 * @name `kubeconform`
 * @aliases `yannh/kubeconform`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.kubeconform
 * // Or access via domain
 * const samePkg = pantry.githubcomyannhkubeconform
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "kubeconform"
 * console.log(pkg.description) // "A FAST Kubernetes manifests validator, with sup..."
 * console.log(pkg.programs)    // ["kubeconform"]
 * console.log(pkg.versions[0]) // "0.7.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/yannh/kubeconform.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kubeconformPackage = {
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
  description: 'A FAST Kubernetes manifests validator, with support for Custom Resources!' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/yannh/kubeconform/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) kubeconform' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'kubeconform',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.7.0',
    '0.6.7',
    '0.6.6',
    '0.6.5',
    '0.6.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'yannh/kubeconform',
  ] as const,
  fullPath: 'github.com/yannh/kubeconform' as const,
}

export type KubeconformPackage = typeof kubeconformPackage
