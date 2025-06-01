/**
 * **palletsprojects.com** - Go home.
 *
 * @domain `palletsprojects.com`
 *
 * @install `pkgx palletsprojects.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.palletsprojectscom
 * console.log(pkg.name)        // "palletsprojects.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/palletsprojects-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const palletsprojectscomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/palletsprojects.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'palletsprojects.com' as const,
  fullPath: 'palletsprojects.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx palletsprojects.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PalletsprojectscomPackage = typeof palletsprojectscomPackage
