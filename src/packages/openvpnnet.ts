/**
 * **openvpn.net** - Package from pantry: openvpn.net
 *
 * @domain `openvpn.net`
 *
 * @install `launchpad install openvpn.net`
 * @dependencies `lz4.org^1.9`, `oberhumer.com/lzo^2.10`, `openssl.org^1.1`, ... (+2 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openvpnnet
 * console.log(pkg.name)        // "openvpn.net"
 * console.log(pkg.description) // "Package from pantry: openvpn.net"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openvpn-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openvpnnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'openvpn.net' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openvpn.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: openvpn.net' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install openvpn.net' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +openvpn.net -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install openvpn.net' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openvpn.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OpenvpnnetPackage = typeof openvpnnetPackage
