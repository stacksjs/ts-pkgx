/**
 * **gomplate** - Crafters of fine Open Source products
 *
 * @domain `gomplate.ca`
 *
 * @install `pkgx gomplate.ca`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gomplateca
 * console.log(pkg.name)        // "gomplate"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gomplate-ca.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gomplatecaPackage = {
  /**
   * The display name of this package.
   */
  name: 'gomplate' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/gomplate.ca/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gomplate.ca' as const,
  fullPath: 'gomplate.ca' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx gomplate.ca' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GomplatecaPackage = typeof gomplatecaPackage
