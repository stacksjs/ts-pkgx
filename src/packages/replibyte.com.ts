/**
 * **replibyte** - Crafters of fine Open Source products
 *
 * @domain `replibyte.com`
 *
 * @install `pkgx replibyte.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.replibytecom
 * console.log(pkg.name)        // "replibyte"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/replibyte-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const replibytecomPackage = {
  /**
   * The display name of this package.
   */
  name: 'replibyte' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/replibyte.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'replibyte.com' as const,
  fullPath: 'replibyte.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx replibyte.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ReplibytecomPackage = typeof replibytecomPackage
