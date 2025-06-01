/**
 * **fx** - Crafters of fine Open Source products
 *
 * @domain `fx.wtf`
 *
 * @install `pkgx fx.wtf`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.fxwtf
 * console.log(pkg.name)        // "fx"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fx-wtf.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fxwtfPackage = {
  /**
   * The display name of this package.
   */
  name: 'fx' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/fx.wtf/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fx.wtf' as const,
  fullPath: 'fx.wtf' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx fx.wtf' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type FxwtfPackage = typeof fxwtfPackage
