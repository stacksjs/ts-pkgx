/**
 * **vim.org** - Crafters of fine Open Source products
 *
 * @domain `vim.org`
 *
 * @install `pkgx vim.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.vimorg
 * console.log(pkg.name)        // "vim.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/vim-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vimorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'vim.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/vim.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'vim.org' as const,
  fullPath: 'vim.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx vim.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type VimorgPackage = typeof vimorgPackage
