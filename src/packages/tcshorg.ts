/**
 * **tcsh.org** - Enhanced, fully compatible version of the Berkeley C shell
 *
 * @domain `tcsh.org`
 * @programs `csh`, `tcsh`
 * @version `6.24.15` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +tcsh.org -- $SHELL -i`
 * @dependencies `github.com/besser82/libxcrypt@4`, `invisible-island.net/ncurses@6`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tcshorg
 * console.log(pkg.name)        // "tcsh.org"
 * console.log(pkg.description) // "Enhanced, fully compatible version of the Berke..."
 * console.log(pkg.programs)    // ["csh", "tcsh"]
 * console.log(pkg.versions[0]) // "6.24.15" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tcsh-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tcshorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'tcsh.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tcsh.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Enhanced, fully compatible version of the Berkeley C shell' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tcsh.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +tcsh.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'csh',
    'tcsh',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'github.com/besser82/libxcrypt@4',
    'invisible-island.net/ncurses@6',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '6.24.15',
  ] as const,
  aliases: [] as const,
}

export type TcshorgPackage = typeof tcshorgPackage
