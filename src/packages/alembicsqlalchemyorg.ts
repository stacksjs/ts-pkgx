/**
 * **alembic.sqlalchemy.org** - pkgx package
 *
 * @domain `alembic.sqlalchemy.org`
 *
 * @install `launchpad install alembic.sqlalchemy.org`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.alembicsqlalchemyorg
 * console.log(pkg.name)        // "alembic.sqlalchemy.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/alembic-sqlalchemy-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const alembicsqlalchemyorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'alembic.sqlalchemy.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'alembic.sqlalchemy.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install alembic.sqlalchemy.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +alembic.sqlalchemy.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install alembic.sqlalchemy.org' as const,
}

export type AlembicsqlalchemyorgPackage = typeof alembicsqlalchemyorgPackage
