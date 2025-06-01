/**
 * **wails** - Crafters of fine Open Source products
 *
 * @domain `wails.io`
 *
 * @install `pkgx wails.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.wailsio
 * console.log(pkg.name)        // "wails"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wails-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wailsioPackage = {
  /**
   * The display name of this package.
   */
  name: 'wails' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/wails.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wails.io' as const,
  fullPath: 'wails.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx wails.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type WailsioPackage = typeof wailsioPackage
