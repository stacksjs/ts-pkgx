/**
 * **srt-ffplay** - Secure, Reliable, Transport
 *
 * @domain `srtalliance.org`
 * @programs `srt-ffplay`, `srt-file-transmit`, `srt-live-transmit`, `srt-tunnel`
 * @version `1.5.4` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install srt-ffplay`
 * @name `srt-ffplay`
 * @dependencies `openssl.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.srtffplay
 * // Or access via domain
 * const samePkg = pantry.srtallianceorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "srt-ffplay"
 * console.log(pkg.description) // "Secure, Reliable, Transport"
 * console.log(pkg.programs)    // ["srt-ffplay", "srt-file-transmit", ...]
 * console.log(pkg.versions[0]) // "1.5.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/srtalliance-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const srtffplayPackage = {
  /**
   * The display name of this package.
   */
  name: 'srt-ffplay' as const,
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install srt-ffplay' as const,
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
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +srtalliance.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install srt-ffplay' as const,
}

export type SrtffplayPackage = typeof srtffplayPackage
