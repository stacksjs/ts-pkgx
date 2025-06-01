/**
 * **bytebase** - Crafters of fine Open Source products
 *
 * @domain `bytebase.com`
 *
 * @install `pkgx bytebase.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.bytebasecom
 * console.log(pkg.name)        // "bytebase"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/bytebase-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bytebasecomPackage = {
  /**
   * The display name of this package.
   */
  name: 'bytebase' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/bytebase.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'bytebase.com' as const,
  fullPath: 'bytebase.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx bytebase.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type BytebasecomPackage = typeof bytebasecomPackage
