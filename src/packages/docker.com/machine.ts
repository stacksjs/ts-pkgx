/**
 * **docker-machine** - Create Docker hosts locally and on cloud providers
 *
 * @domain `docker.com/machine`
 * @programs `docker-machine`
 * @version `0.16.2` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install docker-machine`
 * @aliases `docker-machine`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.dockermachine
 * // Or access via domain
 * const samePkg = pantry.dockercommachine
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "machine"
 * console.log(pkg.description) // "Create Docker hosts locally and on cloud providers"
 * console.log(pkg.programs)    // ["docker-machine"]
 * console.log(pkg.versions[0]) // "0.16.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/docker-com/machine.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dockermachinePackage = {
  /**
   * The display name of this package.
   */
  name: 'machine' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'docker.com/machine' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Create Docker hosts locally and on cloud providers' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/docker.com/machine/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install docker-machine' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'docker-machine',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.16.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'docker-machine',
  ] as const,
}

export type DockermachinePackage = typeof dockermachinePackage
