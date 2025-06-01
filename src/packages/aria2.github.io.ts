/**
 * **aria2c** - Crafters of fine Open Source products
 *
 * @domain `aria2.github.io`
 *
 * @install `pkgx aria2.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.aria2githubio
 * console.log(pkg.name)        // "aria2c"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/aria2-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const aria2githubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'aria2c' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/aria2.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'aria2.github.io' as const,
  fullPath: 'aria2.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx aria2.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type Aria2githubioPackage = typeof aria2githubioPackage
