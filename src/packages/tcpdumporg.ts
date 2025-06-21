/**
 * **pcap-config** - the LIBpcap interface to various kernel packet capture mechanism
 *
 * @domain `tcpdump.org`
 * @programs `pcap-config`
 * @version `1.10.5` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install pcap-config`
 * @aliases `pcap-config`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.pcapconfig
 * // Or access via domain
 * const samePkg = pantry.tcpdumporg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tcpdump.org"
 * console.log(pkg.description) // "the LIBpcap interface to various kernel packet ..."
 * console.log(pkg.programs)    // ["pcap-config"]
 * console.log(pkg.versions[0]) // "1.10.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tcpdump-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pcapconfigPackage = {
  /**
   * The display name of this package.
   */
  name: 'tcpdump.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tcpdump.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'the LIBpcap interface to various kernel packet capture mechanism' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tcpdump.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pcap-config' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pcap-config',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.10.5',
    '1.10.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'pcap-config',
  ] as const,
}

export type PcapconfigPackage = typeof pcapconfigPackage
