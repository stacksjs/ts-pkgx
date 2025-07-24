/**
 * **arduino-cli** - Arduino command-line interface
 *
 * @domain `arduino.github.io/arduino-cli`
 * @programs `arduino-cli`
 * @version `1.2.2` (20 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install arduino-cli`
 * @name `arduino-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.arduinocli
 * // Or access via domain
 * const samePkg = pantry.arduinogithubioarduinocli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "arduino-cli"
 * console.log(pkg.description) // "Arduino command-line interface"
 * console.log(pkg.programs)    // ["arduino-cli"]
 * console.log(pkg.versions[0]) // "1.2.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/arduino-github-io/arduino-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const arduinocliPackage = {
  /**
   * The display name of this package.
   */
  name: 'arduino-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'arduino.github.io/arduino-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Arduino command-line interface' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/arduino.github.io/arduino-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install arduino-cli' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'arduino-cli',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.2.2',
    '1.2.0',
    '1.1.1',
    '1.1.0',
    '1.0.4',
    '1.0.3',
    '1.0.2',
    '1.0.1',
    '1.0.0',
    '0.35.3',
    '0.35.2',
    '0.35.1',
    '0.35.0',
    '0.34.2',
    '0.34.1',
    '0.34.0',
    '0.33.1',
    '0.33.0',
    '0.32.3',
    '0.32.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) arduino-cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install arduino-cli' as const,
}

export type ArduinocliPackage = typeof arduinocliPackage
