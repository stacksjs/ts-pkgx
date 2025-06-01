/**
 * **jbig2dec** - Crafters of fine Open Source products
 *
 * @domain `jbig2dec.com`
 *
 * @install `pkgx jbig2dec.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jbig2deccom
 * console.log(pkg.name)        // "jbig2dec"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jbig2dec-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jbig2deccomPackage = {
  /**
   * The display name of this package.
   */
  name: 'jbig2dec' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/jbig2dec.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jbig2dec.com' as const,
  fullPath: 'jbig2dec.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx jbig2dec.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type Jbig2deccomPackage = typeof jbig2deccomPackage
