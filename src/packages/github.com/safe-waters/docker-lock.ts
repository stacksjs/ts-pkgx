/**
 * **docker-lock** - Package from pantry: github.com/safe-waters/docker-lock
 *
 * @domain `github.com/safe-waters/docker-lock`
 *
 * @install `launchpad install github.com/safe-waters/docker-lock`
 * @dependencies `docker.com/cli`, `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomsafewatersdockerlock
 * console.log(pkg.name)        // "docker-lock"
 * console.log(pkg.description) // "Package from pantry: github.com/safe-waters/doc..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/safe-waters/docker-lock.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomsafewatersdockerlockPackage = {
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
  description: 'Package from pantry: github.com/safe-waters/docker-lock' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/safe-waters/docker-lock' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/safe-waters/docker-lock -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/safe-waters/docker-lock' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'docker.com/cli',
    'curl.se/ca-certs',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/safe-waters/docker-lock/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomsafewatersdockerlockPackage = typeof githubcomsafewatersdockerlockPackage
