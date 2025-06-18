/**
 * **expo.dev/eas-cli** - pkgx package
 *
 * @domain `expo.dev/eas/cli`
 *
 * @install `pkgx expo.dev/eas-cli`
 * @name `eas-cli`
 * @aliases `expo.dev/eas-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.expodeveascli
 * // Or access via domain
 * const samePkg = pantry.expodeveascli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "eas-cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/expo-dev/eas/cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const expodeveascliPackage = {
  /**
   * The display name of this package.
   */
  name: 'eas-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'expo.dev/eas/cli' as const,
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
  installCommand: 'pkgx expo.dev/eas-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'expo.dev/eas-cli',
  ] as const,
  fullPath: 'expo.dev/eas-cli' as const,
}

export type ExpodeveascliPackage = typeof expodeveascliPackage
