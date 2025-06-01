/**
 * **doxygen** - Crafters of fine Open Source products
 *
 * @domain `doxygen.nl`
 *
 * @install `pkgx doxygen.nl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.doxygennl
 * console.log(pkg.name)        // "doxygen"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/doxygen-nl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const doxygennlPackage = {
  /**
   * The display name of this package.
   */
  name: 'doxygen' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/doxygen.nl/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'doxygen.nl' as const,
  fullPath: 'doxygen.nl' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx doxygen.nl' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DoxygennlPackage = typeof doxygennlPackage
