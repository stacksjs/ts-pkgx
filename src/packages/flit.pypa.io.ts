/**
 * **flit** - Crafters of fine Open Source products
 *
 * @domain `flit.pypa.io`
 *
 * @install `pkgx flit.pypa.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.flitpypaio
 * console.log(pkg.name)        // "flit"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/flit-pypa-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const flitpypaioPackage = {
  /**
   * The display name of this package.
   */
  name: 'flit' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/flit.pypa.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'flit.pypa.io' as const,
  fullPath: 'flit.pypa.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx flit.pypa.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type FlitpypaioPackage = typeof flitpypaioPackage
