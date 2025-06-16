/**
 * **alembic** - A database migrations tool for SQLAlchemy.
 *
 * @domain `alembic.sqlalchemy.org`
 * @programs `alembic`
 * @version `1.16.2` (9 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/alembic-sqlalchemy-org.md
 *
 * @install `sh <(curl https://pkgx.sh) alembic`
 * @name `alembic`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.alembic
 * // Or access via domain
 * const samePkg = pantry.alembicsqlalchemyorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "alembic"
 * console.log(pkg.description) // "A database migrations tool for SQLAlchemy."
 * console.log(pkg.programs)    // ["alembic"]
 * console.log(pkg.versions[0]) // "1.16.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/alembic-sqlalchemy-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const alembicPackage = {
  /**
   * The display name of this package.
   */
  name: 'alembic' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'alembic.sqlalchemy.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A database migrations tool for SQLAlchemy.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/alembic.sqlalchemy.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) alembic' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'alembic',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.16.2',
    '1.16.1',
    '1.16.0',
    '1.15.2',
    '1.15.1',
    '1.14.1',
    '1.14.0',
    '1.13.3',
    '1.13.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'alembic.sqlalchemy.org' as const,
}

export type AlembicPackage = typeof alembicPackage
