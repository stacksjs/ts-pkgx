/**
 * **docker.com** - Go home.
 *
 * @domain `docker.com`
 *
 * @install `pkgx docker.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.dockercom
 * console.log(pkg.name)        // "docker.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/docker-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dockercomPackage = {
  /**
   * The display name of this package.
   */
  name: '' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go home.' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/docker.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'docker.com' as const,
  fullPath: 'docker.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx docker.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DockercomPackage = typeof dockercomPackage
