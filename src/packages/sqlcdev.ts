/**
 * **sqlc.dev** - Package from pantry: sqlc.dev
 *
 * @domain `sqlc.dev`
 *
 * @install `launchpad install sqlc.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sqlcdev
 * console.log(pkg.name)        // "sqlc.dev"
 * console.log(pkg.description) // "Package from pantry: sqlc.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sqlc-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sqlcdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'sqlc.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sqlc.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: sqlc.dev' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sqlc.dev' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sqlc.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SqlcdevPackage = typeof sqlcdevPackage
