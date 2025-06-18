/**
 * **vim.org** - Package from pantry: vim.org
 *
 * @domain `vim.org`
 *
 * @install `launchpad install vim.org`
 * @dependencies `python.org~3.11`, `lua.org>=5.4`, `invisible-island.net/ncurses>=6.3`, ... (+3 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.vimorg
 * console.log(pkg.name)        // "vim.org"
 * console.log(pkg.description) // "Package from pantry: vim.org"
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
   * The canonical domain name for this package.
   */
  domain: 'vim.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: vim.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install vim.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
    'lua.org>=5.4',
    'invisible-island.net/ncurses>=6.3',
    'perl.org>=5.36',
    'ruby-lang.org>=3.2',
    'gnu.org/make^4.3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/vim.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type VimorgPackage = typeof vimorgPackage
