/**
 * **classic.yarnpkg.com** - Crafters of fine Open Source products
 *
 * @domain `classic.yarnpkg.com`
 *
 * @install `pkgx classic.yarnpkg.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.classicyarnpkgcom
 * console.log(pkg.name)        // "classic.yarnpkg.com"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/classic-yarnpkg-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const classicyarnpkgcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'classic.yarnpkg.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/classic.yarnpkg.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'classic.yarnpkg.com' as const,
  fullPath: 'classic.yarnpkg.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx classic.yarnpkg.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ClassicyarnpkgcomPackage = typeof classicyarnpkgcomPackage
