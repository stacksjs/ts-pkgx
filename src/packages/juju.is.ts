/**
 * **juju** - Orchestration engine that enables the deployment, integration and lifecycle management of applications at any scale, on any infrastructure (Kubernetes or otherwise).
 *
 * @domain `juju.is`
 * @programs `juju`
 * @version `3.6.7` (17 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/juju-is.md
 *
 * @install `sh <(curl https://pkgx.sh) juju`
 * @name `juju`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.juju
 * // Or access via domain
 * const samePkg = pantry.jujuis
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "juju"
 * console.log(pkg.description) // "Orchestration engine that enables the deploymen..."
 * console.log(pkg.programs)    // ["juju"]
 * console.log(pkg.versions[0]) // "3.6.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/juju-is.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jujuPackage = {
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
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) juju' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'juju',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
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
    '2.9.51',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'juju.is' as const,
}

export type JujuPackage = typeof jujuPackage
