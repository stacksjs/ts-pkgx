/**
 * **OpenSSL** - TLS/SSL and crypto library with QUIC APIs
 *
 * @domain `openssl.org`
 * @programs `openssl`, `c_rehash`
 * @version `3.5.0` (30 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install OpenSSL`
 * @name `OpenSSL`
 * @dependencies `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.OpenSSL
 * // Or access via domain
 * const samePkg = pantry.opensslorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "OpenSSL"
 * console.log(pkg.description) // "TLS/SSL and crypto library with QUIC APIs"
 * console.log(pkg.programs)    // ["openssl", "c_rehash"]
 * console.log(pkg.versions[0]) // "3.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openssl-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openSSLPackage = {
  /**
   * The display name of this package.
   */
  name: 'OpenSSL' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openssl.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'TLS/SSL and crypto library with QUIC APIs' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openssl.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install OpenSSL' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'openssl',
    'c_rehash',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se/ca-certs',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.5.0',
    '3.4.0',
    '3.3.2',
    '3.3.1',
    '3.3.0',
    '3.2.3',
    '3.2.2',
    '3.2.1',
    '3.2.0',
    '3.1.7',
    '3.1.6',
    '3.1.5',
    '3.1.4',
    '3.1.3',
    '3.1.2',
    '3.1.1',
    '3.1.0',
    '3.0.15',
    '3.0.14',
    '3.0.13',
    '3.0.12',
    '3.0.11',
    '3.0.10',
    '3.0.9',
    '3.0.0',
    '1.1.1w',
    '1.1.1v',
    '1.1.1u',
    '1.1.1t',
    '1.1.1s',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +openssl.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install OpenSSL' as const,
}

export type OpenSSLPackage = typeof openSSLPackage
