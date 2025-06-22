/**
 * **flux** - Open and extensible continuous delivery solution for Kubernetes. Powered by GitOps Toolkit.
 *
 * @domain `fluxcd.io/flux2`
 * @programs `flux`
 * @version `2.6.2` (12 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install flux`
 * @name `flux`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.flux
 * // Or access via domain
 * const samePkg = pantry.fluxcdioflux2
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "flux"
 * console.log(pkg.description) // "Open and extensible continuous delivery solutio..."
 * console.log(pkg.programs)    // ["flux"]
 * console.log(pkg.versions[0]) // "2.6.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fluxcd-io/flux2.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fluxPackage = {
  /**
   * The display name of this package.
   */
  name: 'flux' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fluxcd.io/flux2' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Open and extensible continuous delivery solution for Kubernetes. Powered by GitOps Toolkit.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fluxcd.io/flux2/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/fluxcd/flux2' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install flux' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'flux',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.6.2',
    '2.6.1',
    '2.6.0',
    '2.5.1',
    '2.5.0',
    '2.4.0',
    '2.3.0',
    '2.2.3',
    '2.2.2',
    '2.2.1',
    '2.2.0',
    '2.1.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) flux -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install flux' as const,
}

export type FluxPackage = typeof fluxPackage
