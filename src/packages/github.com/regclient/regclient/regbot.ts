/**
 * **regbot** - Package from pantry: github.com/regclient/regclient/regbot
 *
 * @domain `github.com/regclient/regclient/regbot`
 *
 * @install `launchpad install github.com/regclient/regclient/regbot`
 * @dependencies `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomregclientregclientregbot
 * console.log(pkg.name)        // "regbot"
 * console.log(pkg.description) // "Package from pantry: github.com/regclient/regcl..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/regclient/regclient/regbot.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomregclientregclientregbotPackage = {
  /**
   * The display name of this package.
   */
  name: 'regbot' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/regclient/regclient/regbot' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/regclient/regclient/regbot' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/regclient/regclient/regbot' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/regclient/regclient/regbot -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/regclient/regclient/regbot' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/regclient/regclient/regbot/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomregclientregclientregbotPackage = typeof githubcomregclientregclientregbotPackage
