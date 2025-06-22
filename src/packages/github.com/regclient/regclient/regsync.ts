/**
 * **regsync** - Package from pantry: github.com/regclient/regclient/regsync
 *
 * @domain `github.com/regclient/regclient/regsync`
 *
 * @install `launchpad install github.com/regclient/regclient/regsync`
 * @dependencies `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomregclientregclientregsync
 * console.log(pkg.name)        // "regsync"
 * console.log(pkg.description) // "Package from pantry: github.com/regclient/regcl..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/regclient/regclient/regsync.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomregclientregclientregsyncPackage = {
  /**
   * The display name of this package.
   */
  name: 'regsync' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/regclient/regclient/regsync' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/regclient/regclient/regsync' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/regclient/regclient/regsync' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/regclient/regclient/regsync -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/regclient/regclient/regsync' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/regclient/regclient/regsync/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomregclientregclientregsyncPackage = typeof githubcomregclientregclientregsyncPackage
