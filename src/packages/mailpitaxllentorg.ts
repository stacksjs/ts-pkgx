/**
 * **mailpit.axllent.org** - Package from pantry: mailpit.axllent.org
 *
 * @domain `mailpit.axllent.org`
 *
 * @install `launchpad install mailpit.axllent.org`
 * @dependencies `linux:curl.se/ca-certs` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mailpitaxllentorg
 * console.log(pkg.name)        // "mailpit.axllent.org"
 * console.log(pkg.description) // "Package from pantry: mailpit.axllent.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mailpit-axllent-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mailpitaxllentorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'mailpit.axllent.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mailpit.axllent.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: mailpit.axllent.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mailpit.axllent.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +mailpit.axllent.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mailpit.axllent.org' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mailpit.axllent.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MailpitaxllentorgPackage = typeof mailpitaxllentorgPackage
