/**
 * **apple.com** - Go home.
 *
 * @domain `apple.com`
 *
 * @install `pkgx apple.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.applecom
 * console.log(pkg.name)        // "apple.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/apple-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const applecomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/apple.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'apple.com' as const,
  fullPath: 'apple.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx apple.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ApplecomPackage = typeof applecomPackage
