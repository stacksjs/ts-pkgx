/**
 * **rust-script** - Crafters of fine Open Source products
 *
 * @domain `rust-script.org`
 *
 * @install `pkgx rust-script.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rustscriptorg
 * console.log(pkg.name)        // "rust-script"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rust-script-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rustscriptorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'rust-script' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/rust-script.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rust-script.org' as const,
  fullPath: 'rust-script.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx rust-script.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type RustscriptorgPackage = typeof rustscriptorgPackage
