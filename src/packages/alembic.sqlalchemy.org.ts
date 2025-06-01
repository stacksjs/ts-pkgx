/**
 * **alembic** - Crafters of fine Open Source products
 *
 * @domain `alembic.sqlalchemy.org`
 *
 * @install `pkgx alembic.sqlalchemy.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.alembicsqlalchemyorg
 * console.log(pkg.name)        // "alembic"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/alembic-sqlalchemy-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const alembicsqlalchemyorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'alembic' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/alembic.sqlalchemy.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'alembic.sqlalchemy.org' as const,
  fullPath: 'alembic.sqlalchemy.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx alembic.sqlalchemy.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type AlembicsqlalchemyorgPackage = typeof alembicsqlalchemyorgPackage
