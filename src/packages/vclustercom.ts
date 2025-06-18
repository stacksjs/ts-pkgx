/**
 * **vcluster** - vCluster - Create fully functional virtual Kubernetes clusters - Each vcluster runs inside a namespace of the underlying k8s cluster. It's cheaper than creating separate full-blown clusters and it offers better multi-tenancy and isolation than regular namespaces.
 *
 * @domain `vcluster.com`
 * @programs `vcluster`
 * @version `0.25.1` (34 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install vcluster`
 * @aliases `vcluster`
 * @dependencies `kubernetes.io/kubectl^1`, `curl.se/ca-certs`, `go.dev^1.21`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.vcluster
 * // Or access via domain
 * const samePkg = pantry.vclustercom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "vcluster.com"
 * console.log(pkg.description) // "vCluster - Create fully functional virtual Kube..."
 * console.log(pkg.programs)    // ["vcluster"]
 * console.log(pkg.versions[0]) // "0.25.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/vcluster-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vclusterPackage = {
  /**
   * The display name of this package.
   */
  name: 'vcluster.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'vcluster.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'vCluster - Create fully functional virtual Kubernetes clusters - Each vcluster runs inside a namespace of the underlying k8s cluster. It\'s cheaper than creating separate full-blown clusters and it offers better multi-tenancy and isolation than regular namespaces.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/vcluster.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/loft-sh/vcluster' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install vcluster' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'vcluster',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'kubernetes.io/kubectl^1',
    'curl.se/ca-certs',
    'go.dev^1.21',
    'gnu.org/gcc',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.25.1',
    '0.25.0',
    '0.24.1',
    '0.24.0',
    '0.23.2',
    '0.23.1',
    '0.23.0',
    '0.22.6',
    '0.22.5',
    '0.22.4',
    '0.22.3',
    '0.22.2',
    '0.22.1',
    '0.22.0',
    '0.21.6',
    '0.21.5',
    '0.21.4',
    '0.21.3',
    '0.21.2',
    '0.21.1',
    '0.21.0',
    '0.20.6',
    '0.20.5',
    '0.20.4',
    '0.20.3',
    '0.20.2',
    '0.20.1',
    '0.20.0',
    '0.19.9',
    '0.19.8',
    '0.19.7',
    '0.19.6',
    '0.19.5',
    '0.19.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'vcluster',
  ] as const,
}

export type VclusterPackage = typeof vclusterPackage
