/**
 * **wireshark.org** - Package from pantry: wireshark.org
 *
 * @domain `wireshark.org`
 *
 * @install `launchpad install wireshark.org`
 * @dependencies `c-ares.org^1.23`, `gnome.org/glib^2.78.3`, `gnutls.org^3.8.2`, ... (+10 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.wiresharkorg
 * console.log(pkg.name)        // "wireshark.org"
 * console.log(pkg.description) // "Package from pantry: wireshark.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wireshark-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wiresharkorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'wireshark.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wireshark.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: wireshark.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install wireshark.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'c-ares.org^1.23',
    'gnome.org/glib^2.78.3',
    'gnutls.org^3.8.2',
    'gnupg.org/libgcrypt^1.10.3',
    'gnupg.org/libgpg-error^1.47',
    'github.com/maxmind/libmaxminddb^1.8',
    'nghttp2.org^1.58',
    'ibr.cs.tu-bs.de/libsmi^0.4.8',
    'libssh.org^0.10.5',
    'lua.org^5.4',
    'github.com/xiph/speexdsp^1.2.1',
    'tcpdump.org^1.10.4',
    'gnome.org/libxml2^2.12.3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/wireshark.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type WiresharkorgPackage = typeof wiresharkorgPackage
