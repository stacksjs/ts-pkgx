/**
 * **nvim** - Crafters of fine Open Source products
 *
 * @domain `neovim.io`
 *
 * @install `pkgx neovim.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.neovimio
 * console.log(pkg.name)        // "nvim"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/neovim-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const neovimioPackage = {
  /**
   * The display name of this package.
   */
  name: 'nvim' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/neovim.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'neovim.io' as const,
  fullPath: 'neovim.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx neovim.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type NeovimioPackage = typeof neovimioPackage
