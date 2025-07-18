/**
 * **nomad** - Nomad is an easy-to-use, flexible, and performant workload orchestrator that can deploy a mix of microservice, batch, containerized, and non-containerized applications. Nomad is easy to operate and scale and has native Consul and Vault integrations.
 *
 * @domain `nomadproject.io`
 * @programs `nomad`
 * @version `1.10.3` (15 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install nomad`
 * @name `nomad`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.nomad
 * // Or access via domain
 * const samePkg = pantry.nomadprojectio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "nomad"
 * console.log(pkg.description) // "Nomad is an easy-to-use, flexible, and performa..."
 * console.log(pkg.programs)    // ["nomad"]
 * console.log(pkg.versions[0]) // "1.10.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nomadproject-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nomadPackage = {
  /**
   * The display name of this package.
   */
  name: 'nomad' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nomadproject.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Nomad is an easy-to-use, flexible, and performant workload orchestrator that can deploy a mix of microservice, batch, containerized, and non-containerized applications. Nomad is easy to operate and scale and has native Consul and Vault integrations.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/nomadproject.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install nomad' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'nomad',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.10.3',
    '1.10.2',
    '1.10.1',
    '1.10.0',
    '1.9.7',
    '1.9.6',
    '1.9.5',
    '1.9.4',
    '1.9.3',
    '1.9.2',
    '1.9.1',
    '1.9.0',
    '1.8.4',
    '1.8.3',
    '1.8.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) nomad -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install nomad' as const,
}

export type NomadPackage = typeof nomadPackage
