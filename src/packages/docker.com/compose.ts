/**
 * **docker-compose** - Define and run multi-container applications with Docker
 *
 * @domain `docker.com/compose`
 * @programs `docker-compose`
 * @version `2.38.2` (57 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install docker-compose`
 * @name `docker-compose`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.dockercompose
 * // Or access via domain
 * const samePkg = pantry.dockercomcompose
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "docker-compose"
 * console.log(pkg.description) // "Define and run multi-container applications wit..."
 * console.log(pkg.programs)    // ["docker-compose"]
 * console.log(pkg.versions[0]) // "2.38.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/docker-com/compose.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dockercomposePackage = {
  /**
   * The display name of this package.
   */
  name: 'docker-compose' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'docker.com/compose' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Define and run multi-container applications with Docker' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/docker.com/compose/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install docker-compose' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'docker-compose',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.38.2',
    '2.38.1',
    '2.38.0',
    '2.37.3',
    '2.37.2',
    '2.37.1',
    '2.37.0',
    '2.36.2',
    '2.36.1',
    '2.36.0',
    '2.35.1',
    '2.35.0',
    '2.34.0',
    '2.33.1',
    '2.33.0',
    '2.32.4',
    '2.32.3',
    '2.32.2',
    '2.32.1',
    '2.32.0',
    '2.31.0',
    '2.30.3',
    '2.30.2',
    '2.30.1',
    '2.30.0',
    '2.29.7',
    '2.29.6',
    '2.29.5',
    '2.29.4',
    '2.29.3',
    '2.29.2',
    '2.29.1',
    '2.29.0',
    '2.28.1',
    '2.27.3',
    '2.27.2',
    '2.27.1',
    '2.27.0',
    '2.26.1',
    '2.26.0',
    '2.25.0',
    '2.24.7',
    '2.24.6',
    '2.24.5',
    '2.24.4',
    '2.24.3',
    '2.24.2',
    '2.24.1',
    '2.24.0',
    '2.23.3',
    '2.23.2',
    '2.23.1',
    '2.23.0',
    '2.22.0',
    '2.21.0',
    '2.20.3',
    '2.20.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) docker-compose -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install docker-compose' as const,
}

export type DockercomposePackage = typeof dockercomposePackage
