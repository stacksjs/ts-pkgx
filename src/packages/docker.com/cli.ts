/**
 * **docker** - Pack, ship and run any application as a lightweight container
 *
 * @domain `docker.com/cli`
 * @programs `docker`
 * @version `28.3.3` (57 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install docker`
 * @name `docker/cli`
 * @aliases `docker`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.docker
 * // Or access via domain
 * const samePkg = pantry.dockercomcli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "docker/cli"
 * console.log(pkg.description) // "Pack, ship and run any application as a lightwe..."
 * console.log(pkg.programs)    // ["docker"]
 * console.log(pkg.versions[0]) // "28.3.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/docker-com/cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dockerPackage = {
  /**
   * The display name of this package.
   */
  name: 'docker/cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'docker.com/cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Pack, ship and run any application as a lightweight container' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/docker.com/cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install docker' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'docker',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '28.3.3',
    '28.3.2',
    '28.3.1',
    '28.3.0',
    '28.2.2',
    '28.2.1',
    '28.2.0',
    '28.1.1',
    '28.1.0',
    '28.0.4',
    '28.0.3',
    '28.0.2',
    '28.0.1',
    '28.0.0',
    '27.5.1',
    '27.5.0',
    '27.4.1',
    '27.4.0',
    '27.3.1',
    '27.3.0',
    '27.2.1',
    '27.2.0',
    '27.1.2',
    '27.1.1',
    '27.1.0',
    '27.0.3',
    '27.0.2',
    '27.0.1',
    '26.1.5',
    '26.1.4',
    '26.1.3',
    '26.1.2',
    '26.1.1',
    '26.1.0',
    '26.0.2',
    '26.0.1',
    '26.0.0',
    '25.0.7',
    '25.0.6',
    '25.0.5',
    '25.0.4',
    '25.0.3',
    '25.0.2',
    '25.0.1',
    '25.0.0',
    '24.0.9',
    '24.0.8',
    '24.0.7',
    '24.0.6',
    '24.0.5',
    '23.0.15',
    '23.0.10',
    '23.0.9',
    '23.0.8',
    '23.0.7',
    '20.10.27',
    '20.10.26',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'docker',
  ] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) docker -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install docker' as const,
}

export type DockerPackage = typeof dockerPackage
