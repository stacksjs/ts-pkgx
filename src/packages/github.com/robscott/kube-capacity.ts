/**
 * **kube-capacity** - A simple CLI that provides an overview of the resource requests, limits, and utilization in a Kubernetes cluster
 *
 * @domain `github.com/robscott/kube-capacity`
 * @programs `kube-capacity`
 * @version `0.8.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install kube-capacity`
 * @name `kube-capacity`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.kubecapacity
 * // Or access via domain
 * const samePkg = pantry.githubcomrobscottkubecapacity
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "kube-capacity"
 * console.log(pkg.description) // "A simple CLI that provides an overview of the r..."
 * console.log(pkg.programs)    // ["kube-capacity"]
 * console.log(pkg.versions[0]) // "0.8.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/robscott/kube-capacity.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kubecapacityPackage = {
  /**
   * The display name of this package.
   */
  name: 'kube-capacity' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/robscott/kube-capacity' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A simple CLI that provides an overview of the resource requests, limits, and utilization in a Kubernetes cluster' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/robscott/kube-capacity/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install kube-capacity' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'kube-capacity',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.8.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type KubecapacityPackage = typeof kubecapacityPackage
