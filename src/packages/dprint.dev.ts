/**
 * **dprint** - Crafters of fine Open Source products
 *
 * @domain `dprint.dev`
 *
 * @install `pkgx dprint.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.dprintdev
 * console.log(pkg.name)        // "dprint"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dprint-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dprintdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'dprint' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/dprint.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dprint.dev' as const,
  fullPath: 'dprint.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx dprint.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DprintdevPackage = typeof dprintdevPackage
