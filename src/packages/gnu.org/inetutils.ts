/**
 * **gnu.org/inetutils** - pkgx package
 *
 * @domain `gnu.org/inetutils`
 * @programs `dnsdomainname`, `ftp`, `hostname`, `ifconfig`, `logger`, ... (+21 more)
 * @version `2.6.0` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install gnu.org/inetutils`
 * @dependencies `gnu.org/libidn2`, `invisible-island.net/ncurses`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorginetutils
 * console.log(pkg.name)        // "gnu.org/inetutils"
 * console.log(pkg.programs)    // ["dnsdomainname", "ftp", ...]
 * console.log(pkg.versions[0]) // "2.6.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/inetutils.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorginetutilsPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnu.org/inetutils' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/inetutils' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Common network programs' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/inetutils/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/inetutils' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'dnsdomainname',
    'ftp',
    'hostname',
    'ifconfig',
    'logger',
    'ping',
    'ping6',
    'rcp',
    'rexec',
    'rlogin',
    'rsh',
    'talk',
    'telnet',
    'tftp',
    'traceroute',
    'whois',
    'ftpd',
    'inetd',
    'rexecd',
    'rlogind',
    'rshd',
    'syslogd',
    'talkd',
    'telnetd',
    'tftpd',
    'uucpd',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/libidn2',
    'invisible-island.net/ncurses',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.6.0',
    '2.5.0',
    '2.4.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/inetutils -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/inetutils' as const,
}

export type GnuorginetutilsPackage = typeof gnuorginetutilsPackage
