/**
 * **maturin** - Crafters of fine Open Source products
 *
 * @domain `maturin.rs`
 *
 * @install `pkgx maturin.rs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.maturinrs
 * console.log(pkg.name)        // "maturin"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/maturin-rs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const maturinrsPackage = {
  /**
   * The display name of this package.
   */
  name: 'maturin' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/maturin.rs/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'maturin.rs' as const,
  fullPath: 'maturin.rs' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx maturin.rs' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MaturinrsPackage = typeof maturinrsPackage
