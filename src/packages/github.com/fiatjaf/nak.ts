/**
 * **nak** - a command line tool for doing all things nostr
 *
 * @domain `github.com/fiatjaf/nak`
 * @programs `nak`
 * @version `0.14.3` (18 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install nak`
 * @name `nak`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.nak
 * // Or access via domain
 * const samePkg = pantry.githubcomfiatjafnak
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "nak"
 * console.log(pkg.description) // "a command line tool for doing all things nostr"
 * console.log(pkg.programs)    // ["nak"]
 * console.log(pkg.versions[0]) // "0.14.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/fiatjaf/nak.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nakPackage = {
  /**
   * The display name of this package.
   */
  name: 'nak' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/fiatjaf/nak' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'a command line tool for doing all things nostr' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/fiatjaf/nak/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install nak' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'nak',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.14.3',
    '0.14.2',
    '0.14.1',
    '0.14.0',
    '0.13.2',
    '0.13.1',
    '0.13.0',
    '0.12.6',
    '0.12.0',
    '0.11.4',
    '0.11.3',
    '0.11.2',
    '0.11.0',
    '0.10.1',
    '0.10.0',
    '0.9.1',
    '0.9.0',
    '0.8.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type NakPackage = typeof nakPackage
