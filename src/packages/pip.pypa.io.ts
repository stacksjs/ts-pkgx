/**
 * **pip** - Crafters of fine Open Source products
 *
 * @domain `pip.pypa.io`
 *
 * @install `pkgx pip.pypa.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pippypaio
 * console.log(pkg.name)        // "pip"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pip-pypa-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pippypaioPackage = {
  /**
   * The display name of this package.
   */
  name: 'pip' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/pip.pypa.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pip.pypa.io' as const,
  fullPath: 'pip.pypa.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx pip.pypa.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PippypaioPackage = typeof pippypaioPackage
