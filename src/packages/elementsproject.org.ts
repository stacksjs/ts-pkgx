/**
 * **elementsproject.org** - Crafters of fine Open Source products
 *
 * @domain `elementsproject.org`
 *
 * @install `pkgx elementsproject.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.elementsprojectorg
 * console.log(pkg.name)        // "elementsproject.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/elementsproject-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const elementsprojectorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'elementsproject.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/elementsproject.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'elementsproject.org' as const,
  fullPath: 'elementsproject.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx elementsproject.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ElementsprojectorgPackage = typeof elementsprojectorgPackage
