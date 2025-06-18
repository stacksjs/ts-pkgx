/**
 * **lunarvim.org** - 🌙 LunarVim is an IDE layer for Neovim. Completely free and community driven.
 *
 * @domain `lunarvim.org`
 * @programs `lvim`, `nvim`
 * @version `1.4.0` (2 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/lunarvim-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +lunarvim.org -- $SHELL -i`
 * @dependencies `gnu.org/bash`, `crates.io/fd-find`, `pip.pypa.io`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.lunarvimorg
 * console.log(pkg.name)        // "lunarvim.org"
 * console.log(pkg.description) // "🌙 LunarVim is an IDE layer for Neovim. Complet..."
 * console.log(pkg.programs)    // ["lvim", "nvim"]
 * console.log(pkg.versions[0]) // "1.4.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lunarvim-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lunarvimorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'lunarvim.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'lunarvim.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: '🌙 LunarVim is an IDE layer for Neovim. Completely free and community driven.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/lunarvim.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +lunarvim.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'lvim',
    'nvim',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/bash',
    'crates.io/fd-find',
    'pip.pypa.io',
    'python.org^3',
    'nodejs.org',
    'rust-lang.org/cargo',
    'neovim.io',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.4.0',
    '1.3.0',
  ] as const,
  aliases: [] as const,
  fullPath: 'lunarvim.org' as const,
}

export type LunarvimorgPackage = typeof lunarvimorgPackage
