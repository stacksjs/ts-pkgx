/**
 * **invoke** - Crafters of fine Open Source products
 *
 * @domain `pyinvoke.org`
 *
 * @install `pkgx pyinvoke.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pyinvokeorg
 * console.log(pkg.name)        // "invoke"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pyinvoke-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pyinvokeorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'invoke' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/pyinvoke.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pyinvoke.org' as const,
  fullPath: 'pyinvoke.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx pyinvoke.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PyinvokeorgPackage = typeof pyinvokeorgPackage
