/**
 * **buildx** - Package from pantry: docker.com/buildx
 *
 * @domain `docker.com/buildx`
 *
 * @install `launchpad install docker.com/buildx`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.dockercombuildx
 * console.log(pkg.name)        // "buildx"
 * console.log(pkg.description) // "Package from pantry: docker.com/buildx"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/docker-com/buildx.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dockercombuildxPackage = {
  /**
   * The display name of this package.
   */
  name: 'buildx' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'docker.com/buildx' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: docker.com/buildx' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install docker.com/buildx' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +docker.com/buildx -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install docker.com/buildx' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/docker.com/buildx/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DockercombuildxPackage = typeof dockercombuildxPackage
