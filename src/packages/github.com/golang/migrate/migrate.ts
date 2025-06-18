/**
 * **github.com/golang-migrate/migrate** - pkgx package
 *
 * @domain `github.com/golang/migrate/migrate`
 *
 * @install `pkgx github.com/golang-migrate/migrate`
 * @aliases `github.com/golang-migrate/migrate`, `golang-migrate/migrate`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomgolangmigratemigrate
 * // Or access via domain
 * const samePkg = pantry.githubcomgolangmigratemigrate
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "golang-migrate"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/golang/migrate/migrate.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomgolangmigratemigratePackage = {
  /**
   * The display name of this package.
   */
  name: 'golang-migrate' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/golang/migrate/migrate' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/golang-migrate/migrate' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/golang-migrate/migrate',
    'golang-migrate/migrate',
  ] as const,
  fullPath: 'github.com/golang-migrate/migrate' as const,
}

export type GithubcomgolangmigratemigratePackage = typeof githubcomgolangmigratemigratePackage
