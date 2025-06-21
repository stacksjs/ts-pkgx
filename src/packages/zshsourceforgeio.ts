/**
 * **zsh.sourceforge.io** - Package from pantry: zsh.sourceforge.io
 *
 * @domain `zsh.sourceforge.io`
 *
 * @install `launchpad install zsh.sourceforge.io`
 * @dependencies `invisible-island.net/ncurses`, `pcre.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.zshsourceforgeio
 * console.log(pkg.name)        // "zsh.sourceforge.io"
 * console.log(pkg.description) // "Package from pantry: zsh.sourceforge.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/zsh-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const zshsourceforgeioPackage = {
  /**
   * The display name of this package.
   */
  name: 'zsh.sourceforge.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'zsh.sourceforge.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: zsh.sourceforge.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install zsh.sourceforge.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'invisible-island.net/ncurses',
    'pcre.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/zsh.sourceforge.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ZshsourceforgeioPackage = typeof zshsourceforgeioPackage
