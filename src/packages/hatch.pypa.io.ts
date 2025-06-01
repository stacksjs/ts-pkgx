/**
 * **hatch** - Crafters of fine Open Source products
 *
 * @domain `hatch.pypa.io`
 *
 * @install `pkgx hatch.pypa.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.hatchpypaio
 * console.log(pkg.name)        // "hatch"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/hatch-pypa-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hatchpypaioPackage = {
  /**
   * The display name of this package.
   */
  name: 'hatch' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/hatch.pypa.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'hatch.pypa.io' as const,
  fullPath: 'hatch.pypa.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx hatch.pypa.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type HatchpypaioPackage = typeof hatchpypaioPackage
