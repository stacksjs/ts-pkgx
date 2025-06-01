/**
 * **kornel.ski** - Go home.
 *
 * @domain `kornel.ski`
 *
 * @install `pkgx kornel.ski`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kornelski
 * console.log(pkg.name)        // "kornel.ski"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kornel-ski.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kornelskiPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/kornel.ski/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kornel.ski' as const,
  fullPath: 'kornel.ski' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx kornel.ski' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type KornelskiPackage = typeof kornelskiPackage
