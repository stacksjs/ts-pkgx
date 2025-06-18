/**
 * **aserver** - Provides audio and MIDI functionality to the Linux operating system
 *
 * @domain `alsa-project.org/alsa-lib`
 * @programs `aserver`
 * @version `1.2.14` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) aserver`
 * @name `aserver`
 * @aliases `alsa-lib`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.aserver
 * // Or access via domain
 * const samePkg = pantry.alsaprojectorgalsalib
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "aserver"
 * console.log(pkg.description) // "Provides audio and MIDI functionality to the Li..."
 * console.log(pkg.programs)    // ["aserver"]
 * console.log(pkg.versions[0]) // "1.2.14" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/alsa-project-org/alsa-lib.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const aserverPackage = {
  /**
   * The display name of this package.
   */
  name: 'aserver' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'alsa-project.org/alsa-lib' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Provides audio and MIDI functionality to the Linux operating system' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/alsa-project.org/alsa-lib/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) aserver' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'aserver',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.2.14',
    '1.2.13',
    '1.2.12',
    '1.2.11',
    '1.2.10',
    '1.2.9',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'alsa-lib',
  ] as const,
  fullPath: 'alsa-project.org/alsa-lib' as const,
}

export type AserverPackage = typeof aserverPackage
