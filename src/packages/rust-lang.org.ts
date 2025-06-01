/**
 * **rust** - Crafters of fine Open Source products
 *
 * @domain `rust-lang.org`
 *
 * @install `pkgx rust-lang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rustlangorg
 * console.log(pkg.name)        // "rust"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rust-lang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rustlangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'rust' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/rust-lang.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rust-lang.org' as const,
  fullPath: 'rust-lang.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx rust-lang.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type RustlangorgPackage = typeof rustlangorgPackage
