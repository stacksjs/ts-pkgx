/**
 * **kubebuilder** - Kubebuilder - SDK for building Kubernetes APIs using CRDs
 *
 * @domain `kubebuilder.io`
 * @programs `kubebuilder`
 * @version `4.6.0` (18 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) kubebuilder`
 * @name `kubebuilder`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.kubebuilder
 * // Or access via domain
 * const samePkg = pantry.kubebuilderio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "kubebuilder"
 * console.log(pkg.description) // "Kubebuilder - SDK for building Kubernetes APIs ..."
 * console.log(pkg.programs)    // ["kubebuilder"]
 * console.log(pkg.versions[0]) // "4.6.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kubebuilder-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kubebuilderPackage = {
  /**
   * The display name of this package.
   */
  name: 'kubebuilder' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kubebuilder.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Kubebuilder - SDK for building Kubernetes APIs using CRDs' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kubebuilder.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) kubebuilder' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'kubebuilder',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.6.0',
    '4.5.2',
    '4.5.1',
    '4.5.0',
    '4.4.0',
    '4.3.1',
    '4.3.0',
    '4.2.0',
    '4.1.1',
    '4.1.0',
    '4.0.0',
    '3.15.1',
    '3.15.0',
    '3.14.2',
    '3.14.1',
    '3.14.0',
    '3.13.0',
    '3.12.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'kubebuilder.io' as const,
}

export type KubebuilderPackage = typeof kubebuilderPackage
