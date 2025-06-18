/**
 * **arduino.github.io/arduino-cli** - pkgx package
 *
 * @domain `arduino.github.io/arduino/cli`
 *
 * @install `pkgx arduino.github.io/arduino-cli`
 * @name `arduino-cli`
 * @aliases `arduino.github.io/arduino-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.arduinogithubioarduinocli
 * // Or access via domain
 * const samePkg = pantry.arduinogithubioarduinocli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "arduino-cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/arduino-github-io/arduino/cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const arduinogithubioarduinocliPackage = {
  /**
   * The display name of this package.
   */
  name: 'arduino-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'arduino.github.io/arduino/cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx arduino.github.io/arduino-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'arduino.github.io/arduino-cli',
  ] as const,
  fullPath: 'arduino.github.io/arduino-cli' as const,
}

export type ArduinogithubioarduinocliPackage = typeof arduinogithubioarduinocliPackage
