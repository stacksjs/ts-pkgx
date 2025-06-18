/**
 * **srt** - Secure, Reliable, Transport
 *
 * @domain `srtalliance.org`
 * @programs `srt-ffplay`, `srt-file-transmit`, `srt-live-transmit`, `srt-tunnel`
 * @version `1.5.4` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +srtalliance.org -- $SHELL -i`
 * @aliases `srt`
 * @dependencies `openssl.org`, `cmake.org`, `freedesktop.org/pkg-config`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.srt
 * // Or access via domain
 * const samePkg = pantry.srtallianceorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "srtalliance.org"
 * console.log(pkg.description) // "Secure, Reliable, Transport"
 * console.log(pkg.programs)    // ["srt-ffplay", "srt-file-transmit", ...]
 * console.log(pkg.versions[0]) // "1.5.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/srtalliance-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const srtPackage = {
  /**
   * The display name of this package.
   */
  name: 'srtalliance.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'srtalliance.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Secure, Reliable, Transport' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/srtalliance.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +srtalliance.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'srt-ffplay',
    'srt-file-transmit',
    'srt-live-transmit',
    'srt-tunnel',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org',
    'cmake.org',
    'freedesktop.org/pkg-config',
    'freedesktop.org/pkg-config',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.5.4',
    '1.5.3',
    '1.5.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'srt',
  ] as const,
}

export type SrtPackage = typeof srtPackage
