/**
 * **gource** - Crafters of fine Open Source products
 *
 * @domain `gource.io`
 *
 * @install `pkgx gource.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gourceio
 * console.log(pkg.name)        // "gource"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gource-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gourceioPackage = {
  /**
   * The display name of this package.
   */
  name: 'gource' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/gource.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gource.io' as const,
  fullPath: 'gource.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx gource.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GourceioPackage = typeof gourceioPackage
