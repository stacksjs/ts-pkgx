/**
 * **gqlgen** - Crafters of fine Open Source products
 *
 * @domain `gqlgen.com`
 *
 * @install `pkgx gqlgen.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gqlgencom
 * console.log(pkg.name)        // "gqlgen"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gqlgen-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gqlgencomPackage = {
  /**
   * The display name of this package.
   */
  name: 'gqlgen' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/gqlgen.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gqlgen.com' as const,
  fullPath: 'gqlgen.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx gqlgen.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GqlgencomPackage = typeof gqlgencomPackage
