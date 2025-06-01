/**
 * **maaslalani.com** - Go home.
 *
 * @domain `maaslalani.com`
 *
 * @install `pkgx maaslalani.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.maaslalanicom
 * console.log(pkg.name)        // "maaslalani.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/maaslalani-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const maaslalanicomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/maaslalani.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'maaslalani.com' as const,
  fullPath: 'maaslalani.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx maaslalani.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MaaslalanicomPackage = typeof maaslalanicomPackage
