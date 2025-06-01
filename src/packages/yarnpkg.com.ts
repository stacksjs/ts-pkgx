/**
 * **yarn** - Crafters of fine Open Source products
 *
 * @domain `yarnpkg.com`
 *
 * @install `pkgx yarnpkg.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.yarnpkgcom
 * console.log(pkg.name)        // "yarn"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/yarnpkg-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const yarnpkgcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'yarn' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/yarnpkg.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'yarnpkg.com' as const,
  fullPath: 'yarnpkg.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx yarnpkg.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type YarnpkgcomPackage = typeof yarnpkgcomPackage
