/**
 * **postgrest** - Crafters of fine Open Source products
 *
 * @domain `postgrest.org`
 *
 * @install `pkgx postgrest.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.postgrestorg
 * console.log(pkg.name)        // "postgrest"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/postgrest-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const postgrestorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'postgrest' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/postgrest.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'postgrest.org' as const,
  fullPath: 'postgrest.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx postgrest.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PostgrestorgPackage = typeof postgrestorgPackage
