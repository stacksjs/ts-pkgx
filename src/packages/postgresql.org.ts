/**
 * **postgresql.org** - Crafters of fine Open Source products
 *
 * @domain `postgresql.org`
 * @programs `clusterdb`, `createdb`, `dropdb`, `dropuser`, `ecpg`
 * @version `17.2.0` (10 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/postgresql-org.md
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
 * console.log(pkg.programs)    // ["clusterdb", "createdb", ...]
 * console.log(pkg.versions[0]) // "17.2.0" (latest)
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
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '17.2.0',
    '17.0.0',
    '16.1.0',
    '16.0.0',
    '15.2.0',
    '14.7.0',
    '13.9.0',
    '13.12.0',
    '13.11.0',
    '13.1.0',
  ] as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'clusterdb',
    'createdb',
    'dropdb',
    'dropuser',
    'ecpg',
  ] as const,
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
