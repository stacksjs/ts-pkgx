/**
 * **postgresql.org** - Crafters of fine Open Source products
 *
 * @domain `postgresql.org`
 *
 * @install `pkgx postgresql.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.postgresqlorg
 * console.log(pkg.name)        // "postgresql.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/postgresql-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const postgresqlorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'postgresql.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/postgresql.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'postgresql.org' as const,
  fullPath: 'postgresql.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx postgresql.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PostgresqlorgPackage = typeof postgresqlorgPackage
