/**
 * **granted** - Crafters of fine Open Source products
 *
 * @domain `granted.dev`
 *
 * @install `pkgx granted.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.granteddev
 * console.log(pkg.name)        // "granted"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/granted-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const granteddevPackage = {
  /**
   * The display name of this package.
   */
  name: 'granted' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/granted.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'granted.dev' as const,
  fullPath: 'granted.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx granted.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GranteddevPackage = typeof granteddevPackage
