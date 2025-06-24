/**
 * **cli** - Package from pantry: docker.com/cli
 *
 * @domain `docker.com/cli`
 *
 * @install `launchpad install docker.com/cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.dockercomcli
 * console.log(pkg.name)        // "cli"
 * console.log(pkg.description) // "Package from pantry: docker.com/cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/docker-com/cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dockercomcliPackage = {
  /**
   * The display name of this package.
   */
  name: 'cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'docker.com/cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: docker.com/cli' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install docker.com/cli' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +docker.com/cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install docker.com/cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/docker.com/cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DockercomcliPackage = typeof dockercomcliPackage
