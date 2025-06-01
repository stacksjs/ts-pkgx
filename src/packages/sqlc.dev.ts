/**
 * **sqlc** - Crafters of fine Open Source products
 *
 * @domain `sqlc.dev`
 *
 * @install `pkgx sqlc.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sqlcdev
 * console.log(pkg.name)        // "sqlc"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sqlc-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sqlcdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'sqlc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/sqlc.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sqlc.dev' as const,
  fullPath: 'sqlc.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx sqlc.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SqlcdevPackage = typeof sqlcdevPackage
