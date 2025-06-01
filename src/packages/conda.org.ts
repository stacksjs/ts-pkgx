/**
 * **conda** - Crafters of fine Open Source products
 *
 * @domain `conda.org`
 *
 * @install `pkgx conda.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.condaorg
 * console.log(pkg.name)        // "conda"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/conda-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const condaorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'conda' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/conda.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'conda.org' as const,
  fullPath: 'conda.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx conda.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CondaorgPackage = typeof condaorgPackage
