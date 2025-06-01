/**
 * **virtualenv** - Crafters of fine Open Source products
 *
 * @domain `virtualenv.pypa.io`
 *
 * @install `pkgx virtualenv.pypa.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.virtualenvpypaio
 * console.log(pkg.name)        // "virtualenv"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/virtualenv-pypa-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const virtualenvpypaioPackage = {
  /**
   * The display name of this package.
   */
  name: 'virtualenv' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/virtualenv.pypa.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'virtualenv.pypa.io' as const,
  fullPath: 'virtualenv.pypa.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx virtualenv.pypa.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type VirtualenvpypaioPackage = typeof virtualenvpypaioPackage
