/**
 * **kubeshark** - The API traffic analyzer for Kubernetes providing real-time K8s protocol-level visibility, capturing and monitoring all traffic and payloads going in, out and across containers, pods, nodes and clusters. Inspired by Wireshark, purposely built for Kubernetes
 *
 * @domain `kubeshark.co`
 * @programs `kubeshark`
 * @version `72.3.83` (57 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install kubeshark`
 * @aliases `kubeshark`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.kubeshark
 * // Or access via domain
 * const samePkg = pantry.kubesharkco
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "kubeshark.co"
 * console.log(pkg.description) // "The API traffic analyzer for Kubernetes providi..."
 * console.log(pkg.programs)    // ["kubeshark"]
 * console.log(pkg.versions[0]) // "72.3.83" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kubeshark-co.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kubesharkPackage = {
  /**
   * The display name of this package.
   */
  name: 'kubeshark.co' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kubeshark.co' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The API traffic analyzer for Kubernetes providing real-time K8s protocol-level visibility, capturing and monitoring all traffic and payloads going in, out and across containers, pods, nodes and clusters. Inspired by Wireshark, purposely built for Kubernetes' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kubeshark.co/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/kubeshark/kubeshark' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install kubeshark' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'kubeshark',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '72.3.83',
    '52.7.8',
    '52.7.7',
    '52.7.3',
    '52.7.0',
    '52.6.0',
    '52.5.0',
    '52.4.2',
    '52.4.0',
    '52.3.96',
    '52.3.95',
    '52.3.94',
    '52.3.93',
    '52.3.92',
    '52.3.91',
    '52.3.90',
    '52.3.89',
    '52.3.88',
    '52.3.87',
    '52.3.86',
    '52.3.85',
    '52.3.84',
    '52.3.83',
    '52.3.82',
    '52.3.79',
    '52.3.78',
    '52.3.77',
    '52.3.76',
    '52.3.75',
    '52.3.74',
    '52.3.73',
    '52.3.69',
    '52.3.68',
    '52.3.62',
    '52.3.59',
    '52.3.0',
    '52.2.39',
    '52.2.30',
    '52.2.1',
    '52.2.0',
    '52.1.77',
    '52.1.75',
    '52.1.66',
    '52.1.63',
    '52.1.50',
    '52.1.45',
    '52.1.30',
    '52.1.9',
    '52.1.0',
    '52.0.0',
    '51.0.39',
    '51.0.38',
    '51.0.37',
    '51.0.27',
    '51.0.18',
    '51.0.14',
    '51.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'kubeshark',
  ] as const,
}

export type KubesharkPackage = typeof kubesharkPackage
