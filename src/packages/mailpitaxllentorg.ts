/**
 * **mailpit** - An email and SMTP testing tool with API for developers
 *
 * @domain `mailpit.axllent.org`
 * @programs `mailpit`
 * @version `1.26.2` (68 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install mailpit`
 * @aliases `mailpit`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.mailpit
 * // Or access via domain
 * const samePkg = pantry.mailpitaxllentorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mailpit.axllent.org"
 * console.log(pkg.description) // "An email and SMTP testing tool with API for dev..."
 * console.log(pkg.programs)    // ["mailpit"]
 * console.log(pkg.versions[0]) // "1.26.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mailpit-axllent-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mailpitPackage = {
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
  description: 'An email and SMTP testing tool with API for developers' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mailpit.axllent.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mailpit' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mailpit',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
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
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'mailpit',
  ] as const,
}

export type MailpitPackage = typeof mailpitPackage
