/**
 * **regctl** - Package from pantry: github.com/regclient/regclient/regctl
 *
 * @domain `github.com/regclient/regclient/regctl`
 *
 * @install `launchpad install github.com/regclient/regclient/regctl`
 * @dependencies `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomregclientregclientregctl
 * console.log(pkg.name)        // "regctl"
 * console.log(pkg.description) // "Package from pantry: github.com/regclient/regcl..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/regclient/regclient/regctl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomregclientregclientregctlPackage = {
  /**
   * The display name of this package.
   */
  name: 'regctl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/regclient/regclient/regctl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/regclient/regclient/regctl' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/regclient/regclient/regctl' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/regclient/regclient/regctl -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/regclient/regclient/regctl' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se/ca-certs',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/regclient/regclient/regctl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomregclientregclientregctlPackage = typeof githubcomregclientregclientregctlPackage
