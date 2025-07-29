/**
 * **mailpit** - Package from pantry: github.com/axllent/mailpit
 *
 * @domain `github.com/axllent/mailpit`
 *
 * @install `launchpad install github.com/axllent/mailpit`
 * @dependencies `linux:curl.se/ca-certs` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomaxllentmailpit
 * console.log(pkg.name)        // "mailpit"
 * console.log(pkg.description) // "Package from pantry: github.com/axllent/mailpit"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/axllent/mailpit.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomaxllentmailpitPackage = {
  /**
   * The display name of this package.
   */
  name: 'mailpit' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/axllent/mailpit' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/axllent/mailpit' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/axllent/mailpit' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/axllent/mailpit -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/axllent/mailpit' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:curl.se/ca-certs',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/axllent/mailpit/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomaxllentmailpitPackage = typeof githubcomaxllentmailpitPackage
