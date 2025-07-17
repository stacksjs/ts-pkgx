/**
 * **bind9** - pkgx package
 *
 * @domain `isc.org/bind9`
 * @programs `arpaname`, `delv`, `dig`, `dnssec-cds`, `dnssec-dsfromkey`, ... (+24 more)
 * @version `9.21.10` (17 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install bind9`
 * @name `bind9`
 * @dependencies `gnome.org/libxml2@2.13`, `nghttp2.org@1.57`, `libuv.org@1.49`, ... (+10 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.bind9
 * // Or access via domain
 * const samePkg = pantry.iscorgbind9
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "bind9"
 * console.log(pkg.programs)    // ["arpaname", "delv", ...]
 * console.log(pkg.versions[0]) // "9.21.10" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/isc-org/bind9.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bind9Package = {
  /**
   * The display name of this package.
   */
  name: 'bind9' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'isc.org/bind9' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/isc.org/bind9/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install bind9' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'arpaname',
    'delv',
    'dig',
    'dnssec-cds',
    'dnssec-dsfromkey',
    'dnssec-importkey',
    'dnssec-keyfromlabel',
    'dnssec-keygen',
    'dnssec-ksr',
    'dnssec-revoke',
    'dnssec-settime',
    'dnssec-signzone',
    'dnssec-verify',
    'host',
    'mdig',
    'named-checkconf',
    'named-checkzone',
    'named-compilezone',
    'named-journalprint',
    'named-nzd2nzf',
    'named-rrchecker',
    'nsec3hash',
    'nslookup',
    'nsupdate',
    'ddns-confgen',
    'named',
    'rndc',
    'rndc-confgen',
    'tsig-keygen',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'gnome.org/libxml2@2.13',
    'nghttp2.org@1.57',
    'libuv.org@1.49',
    'liburcu.org@0.15',
    'openldap.org/liblmdb@0.9',
    'openssl.org@1.1',
    'gnu.org/readline@8.2',
    'github.com/json-c/json-c@0.18',
    'gnu.org/libidn2@2.3',
    'jemalloc.net@5',
    'mesonbuild.com@1',
    'ninja-build.org',
    'linux:kernel.org/libcap',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '9.21.10',
    '9.21.9',
    '9.21.8',
    '9.21.7',
    '9.21.6',
    '9.21.5',
    '9.21.4',
    '9.20.11',
    '9.20.10',
    '9.20.9',
    '9.20.8',
    '9.20.7',
    '9.20.6',
    '9.18.38',
    '9.18.37',
    '9.18.36',
    '9.18.35',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +isc.org/bind9 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install bind9' as const,
}

export type Bind9Package = typeof bind9Package
