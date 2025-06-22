/**
 * **openvpn** - pkgx package
 *
 * @domain `openvpn.net`
 * @programs `openvpn`
 * @version `2.6.14` (12 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install openvpn`
 * @name `openvpn`
 * @dependencies `lz4.org^1.9`, `oberhumer.com/lzo^2.10`, `openssl.org^1.1`, ... (+2 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.openvpn
 * // Or access via domain
 * const samePkg = pantry.openvpnnet
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "openvpn"
 * console.log(pkg.programs)    // ["openvpn"]
 * console.log(pkg.versions[0]) // "2.6.14" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openvpn-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openvpnPackage = {
  /**
   * The display name of this package.
   */
  name: 'openvpn' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openvpn.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openvpn.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install openvpn' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'openvpn',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'lz4.org^1.9',
    'oberhumer.com/lzo^2.10',
    'openssl.org^1.1',
    'linux:sourceforge.net/net-tools',
    'linux:github.com/thom311/libnl',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.6.14',
    '2.6.13',
    '2.6.12',
    '2.6.11',
    '2.6.10',
    '2.6.9',
    '2.6.8',
    '2.6.7',
    '2.6.6',
    '2.6.5',
    '2.6.4',
    '2.5.10',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) openvpn -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install openvpn' as const,
}

export type OpenvpnPackage = typeof openvpnPackage
