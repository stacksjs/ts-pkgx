/**
 * **rtmpdump** - Tool for downloading RTMP streaming media
 *
 * @domain `rtmpdump.mplayerhq.hu`
 * @programs `rtmpdump`, `rtmpgw`, `rtmpsrv`, `rtmpsuck`
 * @version `2.3.0` (2 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/rtmpdump-mplayerhq-hu.md
 *
 * @install `sh <(curl https://pkgx.sh) +rtmpdump.mplayerhq.hu -- $SHELL -i`
 * @name `rtmpdump`
 * @dependencies `openssl.org^1.1`, `zlib.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.rtmpdump
 * // Or access via domain
 * const samePkg = pantry.rtmpdumpmplayerhqhu
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rtmpdump"
 * console.log(pkg.description) // "Tool for downloading RTMP streaming media"
 * console.log(pkg.programs)    // ["rtmpdump", "rtmpgw", ...]
 * console.log(pkg.versions[0]) // "2.3.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rtmpdump-mplayerhq-hu.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rtmpdumpPackage = {
  /**
   * The display name of this package.
   */
  name: 'rtmpdump' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rtmpdump.mplayerhq.hu' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Tool for downloading RTMP streaming media' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rtmpdump.mplayerhq.hu/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +rtmpdump.mplayerhq.hu -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'rtmpdump',
    'rtmpgw',
    'rtmpsrv',
    'rtmpsuck',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'zlib.net',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.3.0',
    '2.3.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'rtmpdump.mplayerhq.hu' as const,
}

export type RtmpdumpPackage = typeof rtmpdumpPackage
