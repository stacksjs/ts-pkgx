/**
 * **pixi** - Crafters of fine Open Source products
 *
 * @domain `prefix.dev`
 *
 * @install `pkgx prefix.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.prefixdev
 * console.log(pkg.name)        // "pixi"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/prefix-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const prefixdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'pixi' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/prefix.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'prefix.dev' as const,
  fullPath: 'prefix.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx prefix.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PrefixdevPackage = typeof prefixdevPackage
