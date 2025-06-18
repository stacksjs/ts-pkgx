/**
 * **docker-lock** - pkgx package
 *
 * @domain `github.com/safe-waters/docker-lock`
 * @programs `docker-lock`
 * @version `0.8.10` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install docker-lock`
 * @name `docker-lock`
 * @dependencies `docker.com/cli`, `curl.se/ca-certs`, `go.dev^1.19`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.dockerlock
 * // Or access via domain
 * const samePkg = pantry.githubcomsafewatersdockerlock
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "docker-lock"
 * console.log(pkg.programs)    // ["docker-lock"]
 * console.log(pkg.versions[0]) // "0.8.10" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/safe-waters/docker-lock.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dockerlockPackage = {
  /**
   * The display name of this package.
   */
  name: 'docker-lock' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/safe-waters/docker-lock' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/safe-waters/docker-lock/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install docker-lock' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'docker-lock',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'docker.com/cli',
    'curl.se/ca-certs',
    'go.dev^1.19',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.8.10',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type DockerlockPackage = typeof dockerlockPackage
