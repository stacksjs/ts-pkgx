/**
 * **bore** - Crafters of fine Open Source products
 *
 * @domain `bore.pub`
 *
 * @install `pkgx bore.pub`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.borepub
 * console.log(pkg.name)        // "bore"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/bore-pub.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const borepubPackage = {
  /**
   * The display name of this package.
   */
  name: 'bore' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/bore.pub/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'bore.pub' as const,
  fullPath: 'bore.pub' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx bore.pub' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type BorepubPackage = typeof borepubPackage
