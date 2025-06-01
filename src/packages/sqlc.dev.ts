/**
 * **sqlc** - Generate type-safe code from SQL
 *
 * @domain `sqlc.dev`
 * @programs `sqlc`
 * @version `1.29.0` (3 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/sqlc-dev.md
 *
 * @install `sh <(curl https://pkgx.sh) sqlc`
 * @aliases `sqlc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.sqlc
 * // Or access via domain
 * const samePkg = pantry.sqlcdev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sqlc"
 * console.log(pkg.description) // "Generate type-safe code from SQL"
 * console.log(pkg.programs)    // ["sqlc"]
 * console.log(pkg.versions[0]) // "1.29.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sqlc-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sqlcPackage = {
  /**
   * The display name of this package.
   */
  name: 'sqlc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sqlc.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Generate type-safe code from SQL' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sqlc.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) sqlc' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'sqlc',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.29.0',
    '1.28.0',
    '1.27.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'sqlc',
  ] as const,
  fullPath: 'sqlc.dev' as const,
}

export type SqlcPackage = typeof sqlcPackage
