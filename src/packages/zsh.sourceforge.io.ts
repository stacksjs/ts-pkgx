/**
 * **zsh** - UNIX shell (command interpreter)
 *
 * @domain `zsh.sourceforge.io`
 * @programs `zsh`
 * @version `5.9.0` (1 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/zsh-sourceforge-io.md
 *
 * @install `sh <(curl https://pkgx.sh) zsh`
 * @aliases `zsh`
 * @dependencies `invisible-island.net/ncurses`, `pcre.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.zsh
 * // Or access via domain
 * const samePkg = pantry.zshsourceforgeio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "zsh"
 * console.log(pkg.description) // "UNIX shell (command interpreter)"
 * console.log(pkg.programs)    // ["zsh"]
 * console.log(pkg.versions[0]) // "5.9.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/zsh-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const zshPackage = {
  /**
   * The display name of this package.
   */
  name: 'zsh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'zsh.sourceforge.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'UNIX shell (command interpreter)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/zsh.sourceforge.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) zsh' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'zsh',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'invisible-island.net/ncurses',
    'pcre.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.9.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'zsh',
  ] as const,
  fullPath: 'zsh.sourceforge.io' as const,
}

export type ZshPackage = typeof zshPackage
