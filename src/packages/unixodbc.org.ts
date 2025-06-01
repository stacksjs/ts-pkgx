/**
 * **unixodbc.org** - Crafters of fine Open Source products
 *
 * @domain `unixodbc.org`
 *
 * @install `pkgx unixodbc.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.unixodbcorg
 * console.log(pkg.name)        // "unixodbc.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/unixodbc-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const unixodbcorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'unixodbc.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/unixodbc.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'unixodbc.org' as const,
  fullPath: 'unixodbc.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx unixodbc.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type UnixodbcorgPackage = typeof unixodbcorgPackage
