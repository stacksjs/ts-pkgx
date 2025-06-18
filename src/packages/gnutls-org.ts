/**
 * **gnutls.org** - pkgx package
 *
 * @domain `gnutls.org`
 * @programs `certtool`, `danetool`, `gnutls-cli`, `gnutls-cli-debug`, `gnutls-serv`, ... (+3 more)
 * @version `3.8.9` (10 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +gnutls.org -- $SHELL -i`
 * @dependencies `freedesktop.org/p11-kit`, `gnu.org/libidn2`, `gnu.org/libunistring^1`, ... (+6 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnutlsorg
 * console.log(pkg.name)        // "gnutls.org"
 * console.log(pkg.programs)    // ["certtool", "danetool", ...]
 * console.log(pkg.versions[0]) // "3.8.9" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnutls-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnutlsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnutls.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnutls.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnutls.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnutls.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'certtool',
    'danetool',
    'gnutls-cli',
    'gnutls-cli-debug',
    'gnutls-serv',
    'ocsptool',
    'p11tool',
    'psktool',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'freedesktop.org/p11-kit',
    'gnu.org/libidn2',
    'gnu.org/libunistring^1',
    'gnu.org/libtasn1^4',
    'gnu.org/nettle',
    'gnu.org/gettext',
    'gnu.org/gmp',
    'unbound.net^1',
    'curl.se/ca-certs',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.8.9',
    '3.8.7',
    '3.8.6',
    '3.8.5',
    '3.8.4',
    '3.8.3',
    '3.8.2',
    '3.8.1',
    '3.7.10',
    '3.6.16',
  ] as const,
  aliases: [] as const,
  fullPath: 'gnutls.org' as const,
}

export type GnutlsorgPackage = typeof gnutlsorgPackage
