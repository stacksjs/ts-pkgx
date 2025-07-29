/**
 * **machine** - Package from pantry: docker.com/machine
 *
 * @domain `docker.com/machine`
 *
 * @install `launchpad install docker.com/machine`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.dockercommachine
 * console.log(pkg.name)        // "machine"
 * console.log(pkg.description) // "Package from pantry: docker.com/machine"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/docker-com/machine.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dockercommachinePackage = {
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
  description: 'Package from pantry: docker.com/machine' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install docker.com/machine' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +docker.com/machine -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install docker.com/machine' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/docker.com/machine/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DockercommachinePackage = typeof dockercommachinePackage
