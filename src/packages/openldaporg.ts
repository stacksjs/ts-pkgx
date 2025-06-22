/**
 * **ldap** - Open source suite of directory software
 *
 * @domain `openldap.org`
 * @programs `ldapcompare`, `ldapdelete`, `ldapexop`, `ldapmodify`, `ldapmodrdn`, ... (+5 more)
 * @version `2.6.10` (13 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install ldap`
 * @name `ldap`
 * @dependencies `openssl.org^1.1`, `linux:github.com/util-linux/util-linux` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ldap
 * // Or access via domain
 * const samePkg = pantry.openldaporg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ldap"
 * console.log(pkg.description) // "Open source suite of directory software"
 * console.log(pkg.programs)    // ["ldapcompare", "ldapdelete", ...]
 * console.log(pkg.versions[0]) // "2.6.10" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openldap-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ldapPackage = {
  /**
   * The display name of this package.
   */
  name: 'ldap' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openldap.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Open source suite of directory software' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openldap.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ldap' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ldapcompare',
    'ldapdelete',
    'ldapexop',
    'ldapmodify',
    'ldapmodrdn',
    'ldappasswd',
    'ldapsearch',
    'ldapurl',
    'ldapvc',
    'ldapwhoami',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'openssl.org^1.1',
    'linux:github.com/util-linux/util-linux',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.6.10',
    '2.6.9',
    '2.6.8',
    '2.6.7',
    '2.6.6',
    '2.6.5',
    '2.6.4',
    '2.5.20',
    '2.5.19',
    '2.5.18',
    '2.5.17',
    '2.5.16',
    '2.5.15',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +openldap.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install ldap' as const,
}

export type LdapPackage = typeof ldapPackage
