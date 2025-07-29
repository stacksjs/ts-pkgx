/**
 * **compose** - Package from pantry: docker.com/compose
 *
 * @domain `docker.com/compose`
 *
 * @install `launchpad install docker.com/compose`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.dockercomcompose
 * console.log(pkg.name)        // "compose"
 * console.log(pkg.description) // "Package from pantry: docker.com/compose"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/docker-com/compose.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dockercomcomposePackage = {
  /**
   * The display name of this package.
   */
  name: 'compose' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'docker.com/compose' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: docker.com/compose' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install docker.com/compose' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +docker.com/compose -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install docker.com/compose' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/docker.com/compose/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DockercomcomposePackage = typeof dockercomcomposePackage
