/**
 * **expo.dev** - Go home.
 *
 * @domain `expo.dev`
 *
 * @install `pkgx expo.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.expodev
 * console.log(pkg.name)        // "expo.dev"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/expo-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const expodevPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/expo.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'expo.dev' as const,
  fullPath: 'expo.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx expo.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ExpodevPackage = typeof expodevPackage
