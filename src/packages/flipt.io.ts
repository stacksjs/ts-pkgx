/**
 * **flipt** - Crafters of fine Open Source products
 *
 * @domain `flipt.io`
 *
 * @install `pkgx flipt.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.fliptio
 * console.log(pkg.name)        // "flipt"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/flipt-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fliptioPackage = {
  /**
   * The display name of this package.
   */
  name: 'flipt' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/flipt.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'flipt.io' as const,
  fullPath: 'flipt.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx flipt.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type FliptioPackage = typeof fliptioPackage
