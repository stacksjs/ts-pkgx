/**
 * **heroku** - Crafters of fine Open Source products
 *
 * @domain `heroku.com`
 *
 * @install `pkgx heroku.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.herokucom
 * console.log(pkg.name)        // "heroku"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/heroku-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const herokucomPackage = {
  /**
   * The display name of this package.
   */
  name: 'heroku' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/heroku.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'heroku.com' as const,
  fullPath: 'heroku.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx heroku.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type HerokucomPackage = typeof herokucomPackage
