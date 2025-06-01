/**
 * **arduino.github.io** - Go home.
 *
 * @domain `arduino.github.io`
 *
 * @install `pkgx arduino.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.arduinogithubio
 * console.log(pkg.name)        // "arduino.github.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/arduino-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const arduinogithubioPackage = {
  /**
   * The display name of this package.
   */
  name: '' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go home.' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/arduino.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'arduino.github.io' as const,
  fullPath: 'arduino.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx arduino.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ArduinogithubioPackage = typeof arduinogithubioPackage
