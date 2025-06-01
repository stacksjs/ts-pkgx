/**
 * **xc** - Crafters of fine Open Source products
 *
 * @domain `xcfile.dev`
 *
 * @install `pkgx xcfile.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xcfiledev
 * console.log(pkg.name)        // "xc"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/xcfile-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xcfiledevPackage = {
  /**
   * The display name of this package.
   */
  name: 'xc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/xcfile.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'xcfile.dev' as const,
  fullPath: 'xcfile.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx xcfile.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type XcfiledevPackage = typeof xcfiledevPackage
