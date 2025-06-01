/**
 * **android.com** - Go home.
 *
 * @domain `android.com`
 *
 * @install `pkgx android.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.androidcom
 * console.log(pkg.name)        // "android.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/android-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const androidcomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/android.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'android.com' as const,
  fullPath: 'android.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx android.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type AndroidcomPackage = typeof androidcomPackage
