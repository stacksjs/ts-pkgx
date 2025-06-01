/**
 * **nvim** - Ambitious Vim-fork focused on extensibility and agility
 *
 * @domain `neovim.io`
 * @programs `nvim`
 * @version `0.11.2` (15 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/neovim-io.md
 *
 * @install `sh <(curl https://pkgx.sh) nvim`
 * @aliases `nvim`
 * @dependencies `gnu.org/gettext^0`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.nvim
 * // Or access via domain
 * const samePkg = pantry.neovimio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "nvim"
 * console.log(pkg.description) // "Ambitious Vim-fork focused on extensibility and..."
 * console.log(pkg.programs)    // ["nvim"]
 * console.log(pkg.versions[0]) // "0.11.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/neovim-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nvimPackage = {
  /**
   * The display name of this package.
   */
  name: 'nvim' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'neovim.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Ambitious Vim-fork focused on extensibility and agility' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/neovim.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) nvim' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'nvim',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gettext^0',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.11.2',
    '0.11.1',
    '0.11.0',
    '0.10.4',
    '0.10.3',
    '0.10.2',
    '0.10.1',
    '0.10.0',
    '0.9.5',
    '0.9.4',
    '0.9.2',
    '0.9.1',
    '0.9.0',
    '0.8.2',
    '0.8.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'nvim',
  ] as const,
  fullPath: 'neovim.io' as const,
}

export type NvimPackage = typeof nvimPackage
