/**
 * **fury** - Crafters of fine Open Source products
 *
 * @domain `fury.co`
 *
 * @install `pkgx fury.co`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.furyco
 * console.log(pkg.name)        // "fury"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fury-co.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const furycoPackage = {
  /**
   * The display name of this package.
   */
  name: 'fury' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/fury.co/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fury.co' as const,
  fullPath: 'fury.co' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx fury.co' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type FurycoPackage = typeof furycoPackage
