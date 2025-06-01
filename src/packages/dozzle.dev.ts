/**
 * **dozzle** - Crafters of fine Open Source products
 *
 * @domain `dozzle.dev`
 *
 * @install `pkgx dozzle.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.dozzledev
 * console.log(pkg.name)        // "dozzle"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dozzle-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dozzledevPackage = {
  /**
   * The display name of this package.
   */
  name: 'dozzle' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/dozzle.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dozzle.dev' as const,
  fullPath: 'dozzle.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx dozzle.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DozzledevPackage = typeof dozzledevPackage
