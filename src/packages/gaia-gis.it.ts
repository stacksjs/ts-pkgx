/**
 * **gaia-gis.it** - Go home.
 *
 * @domain `gaia-gis.it`
 *
 * @install `pkgx gaia-gis.it`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gaiagisit
 * console.log(pkg.name)        // "gaia-gis.it"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gaia-gis-it.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gaiagisitPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/gaia-gis.it/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gaia-gis.it' as const,
  fullPath: 'gaia-gis.it' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx gaia-gis.it' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GaiagisitPackage = typeof gaiagisitPackage
