/**
 * **vale** - Crafters of fine Open Source products
 *
 * @domain `vale.sh`
 *
 * @install `pkgx vale.sh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.valesh
 * console.log(pkg.name)        // "vale"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/vale-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const valeshPackage = {
  /**
   * The display name of this package.
   */
  name: 'vale' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/vale.sh/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'vale.sh' as const,
  fullPath: 'vale.sh' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx vale.sh' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ValeshPackage = typeof valeshPackage
