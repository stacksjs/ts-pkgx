/**
 * **macvim.org** - Package from pantry: macvim.org
 *
 * @domain `macvim.org`
 *
 * @install `launchpad install macvim.org`
 * @dependencies `cscope.sourceforge.io`, `invisible-island.net/ncurses`, `lua.org`, ... (+5 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.macvimorg
 * console.log(pkg.name)        // "macvim.org"
 * console.log(pkg.description) // "Package from pantry: macvim.org"
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
  description: 'Package from pantry: macvim.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install macvim.org' as const,
  programs: [] as const,
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
    'gnu.org/make',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/macvim.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MacvimorgPackage = typeof macvimorgPackage
