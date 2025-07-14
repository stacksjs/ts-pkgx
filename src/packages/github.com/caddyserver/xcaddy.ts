/**
 * **xcaddy** - Package from pantry: github.com/caddyserver/xcaddy
 *
 * @domain `github.com/caddyserver/xcaddy`
 *
 * @install `launchpad install github.com/caddyserver/xcaddy`
 * @dependencies `go.dev^1.21`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomcaddyserverxcaddy
 * console.log(pkg.name)        // "xcaddy"
 * console.log(pkg.description) // "Package from pantry: github.com/caddyserver/xcaddy"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/caddyserver/xcaddy.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomcaddyserverxcaddyPackage = {
  /**
   * The display name of this package.
   */
  name: 'xcaddy' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/caddyserver/xcaddy' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/caddyserver/xcaddy' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/caddyserver/xcaddy' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/caddyserver/xcaddy -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/caddyserver/xcaddy' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.21',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/caddyserver/xcaddy/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomcaddyserverxcaddyPackage = typeof githubcomcaddyserverxcaddyPackage
