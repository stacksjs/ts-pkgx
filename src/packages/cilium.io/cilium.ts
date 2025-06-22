/**
 * **cilium** - CLI to install, manage & troubleshoot Kubernetes clusters running Cilium
 *
 * @domain `cilium.io/cilium`
 * @programs `cilium`
 * @version `0.18.4` (25 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install cilium`
 * @name `cilium`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cilium
 * // Or access via domain
 * const samePkg = pantry.ciliumiocilium
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cilium"
 * console.log(pkg.description) // "CLI to install, manage & troubleshoot Kubernete..."
 * console.log(pkg.programs)    // ["cilium"]
 * console.log(pkg.versions[0]) // "0.18.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cilium-io/cilium.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ciliumPackage = {
  /**
   * The display name of this package.
   */
  name: 'cilium' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cilium.io/cilium' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'CLI to install, manage & troubleshoot Kubernetes clusters running Cilium' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cilium.io/cilium/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cilium' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cilium',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.18.4',
    '0.18.3',
    '0.18.2',
    '0.18.1',
    '0.18.0',
    '0.17.0',
    '0.16.24',
    '0.16.23',
    '0.16.22',
    '0.16.21',
    '0.16.20',
    '0.16.19',
    '0.16.18',
    '0.16.17',
    '0.16.16',
    '0.16.15',
    '0.16.14',
    '0.16.13',
    '0.16.12',
    '0.16.11',
    '0.16.10',
    '0.16.9',
    '0.16.8',
    '0.16.7',
    '0.16.6',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) cilium -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cilium' as const,
}

export type CiliumPackage = typeof ciliumPackage
