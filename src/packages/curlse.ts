/**
 * **cURL** - A command line tool and library for transferring data with URL syntax, supporting DICT, FILE, FTP, FTPS, GOPHER, GOPHERS, HTTP, HTTPS, IMAP, IMAPS, LDAP, LDAPS, MQTT, POP3, POP3S, RTMP, RTMPS, RTSP, SCP, SFTP, SMB, SMBS, SMTP, SMTPS, TELNET, TFTP, WS and WSS. libcurl offers a myriad of powerful features
 *
 * @domain `curl.se`
 * @programs `curl`, `curl-config`
 * @version `8.15.0` (26 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install cURL`
 * @name `cURL`
 * @aliases `curl`
 * @dependencies `openssl.org^1.1`, `curl.se/ca-certs`, `zlib.net^1.2.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cURL
 * // Or access via domain
 * const samePkg = pantry.curlse
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cURL"
 * console.log(pkg.description) // "A command line tool and library for transferrin..."
 * console.log(pkg.programs)    // ["curl", "curl-config"]
 * console.log(pkg.versions[0]) // "8.15.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/curl-se.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cURLPackage = {
  /**
   * The display name of this package.
   */
  name: 'cURL' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'curl.se' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A command line tool and library for transferring data with URL syntax, supporting DICT, FILE, FTP, FTPS, GOPHER, GOPHERS, HTTP, HTTPS, IMAP, IMAPS, LDAP, LDAPS, MQTT, POP3, POP3S, RTMP, RTMPS, RTSP, SCP, SFTP, SMB, SMBS, SMTP, SMTPS, TELNET, TFTP, WS and WSS. libcurl offers a myriad of powerful features' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/curl.se/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cURL' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'curl',
    'curl-config',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'curl.se/ca-certs',
    'zlib.net^1.2.11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '8.15.0',
    '8.14.1',
    '8.14.0',
    '8.13.0',
    '8.12.1',
    '8.12.0',
    '8.11.1',
    '8.11.0',
    '8.10.1',
    '8.10.0',
    '8.9.1',
    '8.9.0',
    '8.8.0',
    '8.7.1',
    '8.6.0',
    '8.5.0',
    '8.4.0',
    '8.3.0',
    '8.2.1',
    '8.2.0',
    '8.1.2',
    '8.1.0',
    '8.0.1',
    '8.0.0',
    '7.86.0',
    '7.85.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'curl',
  ] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +curl.se -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cURL' as const,
}

export type CURLPackage = typeof cURLPackage
