/**
 * **dblab** - Crafters of fine Open Source products
 *
 * @domain `dblab.danvergara.com`
 *
 * @install `pkgx dblab.danvergara.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.dblabdanvergaracom
 * console.log(pkg.name)        // "dblab"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dblab-danvergara-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dblabdanvergaracomPackage = {
  /**
   * The display name of this package.
   */
  name: 'dblab' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/dblab.danvergara.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dblab.danvergara.com' as const,
  fullPath: 'dblab.danvergara.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx dblab.danvergara.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DblabdanvergaracomPackage = typeof dblabdanvergaracomPackage
