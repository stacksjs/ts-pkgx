/**
 * **trip** - Network diagnostic tool, inspired by mtr
 *
 * @domain `trippy.cli.rs`
 * @programs `trip`
 * @version `0.13.0` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install trip`
 * @aliases `trip`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.trip
 * // Or access via domain
 * const samePkg = pantry.trippyclirs
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "trippy.cli.rs"
 * console.log(pkg.description) // "Network diagnostic tool, inspired by mtr"
 * console.log(pkg.programs)    // ["trip"]
 * console.log(pkg.versions[0]) // "0.13.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/trippy-cli-rs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tripPackage = {
  /**
   * The display name of this package.
   */
  name: 'trippy.cli.rs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'trippy.cli.rs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Network diagnostic tool, inspired by mtr' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/trippy.cli.rs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install trip' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'trip',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.13.0',
    '0.12.2',
    '0.12.1',
    '0.12.0',
    '0.11.0',
    '0.10.0',
    '0.9.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'trip',
  ] as const,
}

export type TripPackage = typeof tripPackage
