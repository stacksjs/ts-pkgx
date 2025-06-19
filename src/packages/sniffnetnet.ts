/**
 * **sniffnet** - Cross-platform application to monitor your network traffic
 *
 * @domain `sniffnet.net`
 * @programs `sniffnet`
 * @version `1.3.2` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install sniffnet`
 * @aliases `sniffnet`
 * @dependencies `openssl.org@1`, `tcpdump.org@1`, `linux:alsa-project.org/alsa-lib@1`, ... (+1 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.sniffnet
 * // Or access via domain
 * const samePkg = pantry.sniffnetnet
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sniffnet.net"
 * console.log(pkg.description) // "Cross-platform application to monitor your netw..."
 * console.log(pkg.programs)    // ["sniffnet"]
 * console.log(pkg.versions[0]) // "1.3.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sniffnet-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sniffnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'sniffnet.net' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sniffnet.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Cross-platform application to monitor your network traffic' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sniffnet.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sniffnet' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'sniffnet',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'openssl.org@1',
    'tcpdump.org@1',
    'linux:alsa-project.org/alsa-lib@1',
    'linux:freedesktop.org/fontconfig@2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.2',
    '1.3.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'sniffnet',
  ] as const,
}

export type SniffnetPackage = typeof sniffnetPackage
