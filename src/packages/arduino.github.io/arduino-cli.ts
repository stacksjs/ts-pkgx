/**
 * **arduino-cli** - Package from pantry: arduino.github.io/arduino-cli
 *
 * @domain `arduino.github.io/arduino-cli`
 *
 * @install `launchpad install arduino.github.io/arduino-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.arduinogithubioarduinocli
 * console.log(pkg.name)        // "arduino-cli"
 * console.log(pkg.description) // "Package from pantry: arduino.github.io/arduino-cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/arduino-github-io/arduino-cli.md
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
  domain: 'arduino.github.io/arduino-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: arduino.github.io/arduino-cli' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install arduino.github.io/arduino-cli' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +arduino.github.io/arduino-cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install arduino.github.io/arduino-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/arduino.github.io/arduino-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ArduinogithubioarduinocliPackage = typeof arduinogithubioarduinocliPackage
