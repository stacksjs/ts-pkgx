/**
 * **git-town** - Crafters of fine Open Source products
 *
 * @domain `git-town.com`
 *
 * @install `pkgx git-town.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gittowncom
 * console.log(pkg.name)        // "git-town"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/git-town-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gittowncomPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-town' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/git-town.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'git-town.com' as const,
  fullPath: 'git-town.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx git-town.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GittowncomPackage = typeof gittowncomPackage
