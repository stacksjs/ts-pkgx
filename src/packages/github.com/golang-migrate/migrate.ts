/**
 * **migrate** - Database migrations. CLI and Golang library.
 *
 * @domain `github.com/golang-migrate/migrate`
 * @programs `migrate`
 * @version `4.19.0` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install migrate`
 * @name `migrate`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.migrate
 * // Or access via domain
 * const samePkg = pantry.githubcomgolangmigratemigrate
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "migrate"
 * console.log(pkg.description) // "Database migrations. CLI and Golang library."
 * console.log(pkg.programs)    // ["migrate"]
 * console.log(pkg.versions[0]) // "4.19.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/golang-migrate/migrate.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const migratePackage = {
  /**
   * The display name of this package.
   */
  name: 'migrate' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/golang-migrate/migrate' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Database migrations. CLI and Golang library.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/golang-migrate/migrate/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install migrate' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'migrate',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.19.0',
    '4.18.3',
    '4.18.2',
    '4.18.1',
    '4.18.0',
    '4.17.1',
    '4.17.0',
    '4.16.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) migrate -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install migrate' as const,
}

export type MigratePackage = typeof migratePackage
