/**
 * **catb.org** - Go home.
 *
 * @domain `catb.org`
 *
 * @install `pkgx catb.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.catborg
 * console.log(pkg.name)        // "catb.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/catb-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const catborgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/catb.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'catb.org' as const,
  fullPath: 'catb.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx catb.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CatborgPackage = typeof catborgPackage
