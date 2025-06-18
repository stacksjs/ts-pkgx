/**
 * **macvim.org** - Vim - the text editor - for macOS
 *
 * @domain `macvim.org`
 * @programs `gview`, `gvim`, `gvimdiff`, `gvimtutor`, `mview`, ... (+7 more)
 * @version `181.0.0` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +macvim.org -- $SHELL -i`
 * @dependencies `cscope.sourceforge.io`, `invisible-island.net/ncurses`, `lua.org`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.macvimorg
 * console.log(pkg.name)        // "macvim.org"
 * console.log(pkg.description) // "Vim - the text editor - for macOS"
 * console.log(pkg.programs)    // ["gview", "gvim", ...]
 * console.log(pkg.versions[0]) // "181.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/macvim-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const macvimorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'macvim.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'macvim.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Vim - the text editor - for macOS' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/macvim.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +macvim.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gview',
    'gvim',
    'gvimdiff',
    'gvimtutor',
    'mview',
    'mvim',
    'mvimdiff',
    'mvimtutor',
    'view',
    'vim',
    'vimdiff',
    'vimtutor',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'cscope.sourceforge.io',
    'invisible-island.net/ncurses',
    'lua.org',
    'python.org~3.11',
    'ruby-lang.org',
    'libsodium.org',
    'gnu.org/gettext',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '181.0.0',
    '180.0.0',
    '179.0.0',
    '178.0.0',
    '177.0.0',
  ] as const,
  aliases: [] as const,
  fullPath: 'macvim.org' as const,
}

export type MacvimorgPackage = typeof macvimorgPackage
