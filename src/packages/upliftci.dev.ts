/**
 * **uplift** - Crafters of fine Open Source products
 *
 * @domain `upliftci.dev`
 *
 * @install `pkgx upliftci.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.upliftcidev
 * console.log(pkg.name)        // "uplift"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/upliftci-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const upliftcidevPackage = {
  /**
   * The display name of this package.
   */
  name: 'uplift' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/upliftci.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'upliftci.dev' as const,
  fullPath: 'upliftci.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx upliftci.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type UpliftcidevPackage = typeof upliftcidevPackage
