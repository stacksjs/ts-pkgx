/**
 * **xplr** - Crafters of fine Open Source products
 *
 * @domain `xplr.dev`
 *
 * @install `pkgx xplr.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xplrdev
 * console.log(pkg.name)        // "xplr"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/xplr-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xplrdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'xplr' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/xplr.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'xplr.dev' as const,
  fullPath: 'xplr.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx xplr.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type XplrdevPackage = typeof xplrdevPackage
