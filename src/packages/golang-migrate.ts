/**
 * **golang-migrate** - pkgx package
 *
 * @domain `github.com/golang-migrate`
 *
 * @install `pkgx github.com/golang-migrate`
 * @name `golang-migrate`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.golangmigrate
 * // Or access via domain
 * const samePkg = pantry.githubcomgolangmigrate
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "golang-migrate"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/golang-migrate.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const golangmigratePackage = {
  /**
   * The display name of this package.
   */
  name: 'golang-migrate' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/golang-migrate' as const,
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
  installCommand: 'pkgx github.com/golang-migrate' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/golang-migrate' as const,
}

export type GolangmigratePackage = typeof golangmigratePackage
