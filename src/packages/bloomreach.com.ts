/**
 * **bloomreach.com** - Go home.
 *
 * @domain `bloomreach.com`
 *
 * @install `pkgx bloomreach.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.bloomreachcom
 * console.log(pkg.name)        // "bloomreach.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/bloomreach-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bloomreachcomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/bloomreach.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'bloomreach.com' as const,
  fullPath: 'bloomreach.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx bloomreach.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type BloomreachcomPackage = typeof bloomreachcomPackage
