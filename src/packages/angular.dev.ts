/**
 * **ng** - Crafters of fine Open Source products
 *
 * @domain `angular.dev`
 *
 * @install `pkgx angular.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.angulardev
 * console.log(pkg.name)        // "ng"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/angular-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const angulardevPackage = {
  /**
   * The display name of this package.
   */
  name: 'ng' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/angular.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'angular.dev' as const,
  fullPath: 'angular.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx angular.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type AngulardevPackage = typeof angulardevPackage
