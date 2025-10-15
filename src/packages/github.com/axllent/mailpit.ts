/**
 * **mailpit** - An email and SMTP testing tool with API for developers
 *
 * @domain `github.com/axllent/mailpit`
 * @programs `mailpit`
 * @version `1.27.10` (80 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/axllent/mailpit`
 * @homepage https://mailpit.axllent.org/
 * @dependencies `linux:curl.se/ca-certs` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomaxllentmailpit
 * console.log(pkg.name)        // "mailpit"
 * console.log(pkg.description) // "An email and SMTP testing tool with API for dev..."
 * console.log(pkg.programs)    // ["mailpit"]
 * console.log(pkg.versions[0]) // "1.27.10" (latest)
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
  description: 'An email and SMTP testing tool with API for developers' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/axllent/mailpit/package.yml' as const,
  homepageUrl: 'https://mailpit.axllent.org/' as const,
  githubUrl: 'https://github.com/axllent/mailpit' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/axllent/mailpit' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/axllent/mailpit -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/axllent/mailpit' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mailpit',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:curl.se/ca-certs',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.27.10',
    '1.27.9',
    '1.27.8',
    '1.27.7',
    '1.27.6',
    '1.27.5',
    '1.27.4',
    '1.27.3',
    '1.27.2',
    '1.27.1',
    '1.27.0',
    '1.26.2',
    '1.26.1',
    '1.26.0',
    '1.25.1',
    '1.25.0',
    '1.24.2',
    '1.24.1',
    '1.24.0',
    '1.23.2',
    '1.23.1',
    '1.23.0',
    '1.22.3',
    '1.22.2',
    '1.22.1',
    '1.22.0',
    '1.21.8',
    '1.21.7',
    '1.21.6',
    '1.21.5',
    '1.21.4',
    '1.21.3',
    '1.21.2',
    '1.21.1',
    '1.21.0',
    '1.20.7',
    '1.20.6',
    '1.20.5',
    '1.20.4',
    '1.20.3',
    '1.20.2',
    '1.20.1',
    '1.20.0',
    '1.19.3',
    '1.19.2',
    '1.19.1',
    '1.19.0',
    '1.18.7',
    '1.18.6',
    '1.18.5',
    '1.18.4',
    '1.18.3',
    '1.18.2',
    '1.18.1',
    '1.18.0',
    '1.17.1',
    '1.17.0',
    '1.16.0',
    '1.15.1',
    '1.15.0',
    '1.14.4',
    '1.14.3',
    '1.14.2',
    '1.14.1',
    '1.14.0',
    '1.13.3',
    '1.13.2',
    '1.13.1',
    '1.13.0',
    '1.12.1',
    '1.12.0',
    '1.11.1',
    '1.11.0',
    '1.10.4',
    '1.10.3',
    '1.10.2',
    '1.10.1',
    '1.10.0',
    '1.9.10',
    '1.9.9',
  ] as const,
  aliases: [] as const,
}

export type GithubcomaxllentmailpitPackage = typeof githubcomaxllentmailpitPackage
