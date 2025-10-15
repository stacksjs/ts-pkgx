/**
 * **juju** - Orchestration engine that enables the deployment, integration and lifecycle management of applications at any scale, on any infrastructure (Kubernetes or otherwise).
 *
 * @domain `juju.is`
 * @programs `juju`
 * @version `3.6.10` (21 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install juju.is`
 * @homepage https://juju.is/
 * @dependencies `go.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jujuis
 * console.log(pkg.name)        // "juju"
 * console.log(pkg.description) // "Orchestration engine that enables the deploymen..."
 * console.log(pkg.programs)    // ["juju"]
 * console.log(pkg.versions[0]) // "3.6.10" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/juju-is.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jujuisPackage = {
  /**
   * The display name of this package.
   */
  name: 'juju' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'juju.is' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Orchestration engine that enables the deployment, integration and lifecycle management of applications at any scale, on any infrastructure (Kubernetes or otherwise).' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/juju.is/package.yml' as const,
  homepageUrl: 'https://juju.is/' as const,
  githubUrl: 'https://github.com/juju/juju' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install juju.is' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +juju.is -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install juju.is' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'juju',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.6.10',
    '3.6.9',
    '3.6.8',
    '3.6.7',
    '3.6.6',
    '3.6.5',
    '3.6.4',
    '3.6.3',
    '3.6.2',
    '3.6.1',
    '3.6.0',
    '3.5.7',
    '3.5.6',
    '3.5.5',
    '3.5.4',
    '3.5.3',
    '3.4.6',
    '3.3.7',
    '3.1.10',
    '2.9.52',
    '2.9.51',
  ] as const,
  aliases: [] as const,
}

export type JujuisPackage = typeof jujuisPackage
