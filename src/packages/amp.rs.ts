/**
 * **amp** - Crafters of fine Open Source products
 *
 * @domain `amp.rs`
 *
 * @install `pkgx amp.rs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.amprs
 * console.log(pkg.name)        // "amp"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/amp-rs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const amprsPackage = {
  /**
   * The display name of this package.
   */
  name: 'amp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/amp.rs/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'amp.rs' as const,
  fullPath: 'amp.rs' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx amp.rs' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type AmprsPackage = typeof amprsPackage
