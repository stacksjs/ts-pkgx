/**
 * **sensors** - Tools for monitoring the temperatures, voltages, and fans
 *
 * @domain `github.com/lm-sensors/lm-sensors`
 * @programs `sensors`
 * @version `3.6.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) sensors`
 * @name `sensors`
 * @aliases `lm-sensors/lm-sensors`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.sensors
 * // Or access via domain
 * const samePkg = pantry.githubcomlmsensorslmsensors
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sensors"
 * console.log(pkg.description) // "Tools for monitoring the temperatures, voltages..."
 * console.log(pkg.programs)    // ["sensors"]
 * console.log(pkg.versions[0]) // "3.6.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/lm-sensors/lm-sensors.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sensorsPackage = {
  /**
   * The display name of this package.
   */
  name: 'sensors' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/lm-sensors/lm-sensors' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Tools for monitoring the temperatures, voltages, and fans' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/lm-sensors/lm-sensors/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) sensors' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'sensors',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.6.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'lm-sensors/lm-sensors',
  ] as const,
  fullPath: 'github.com/lm-sensors/lm-sensors' as const,
}

export type SensorsPackage = typeof sensorsPackage
