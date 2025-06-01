/**
 * **tectonic** - Crafters of fine Open Source products
 *
 * @domain `tectonic-typesetting.github.io`
 *
 * @install `pkgx tectonic-typesetting.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tectonictypesettinggithubio
 * console.log(pkg.name)        // "tectonic"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tectonic-typesetting-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tectonictypesettinggithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'tectonic' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/tectonic-typesetting.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tectonic-typesetting.github.io' as const,
  fullPath: 'tectonic-typesetting.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx tectonic-typesetting.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TectonictypesettinggithubioPackage = typeof tectonictypesettinggithubioPackage
