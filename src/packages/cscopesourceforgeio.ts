/**
 * **cscope.sourceforge.io** - Tool for browsing source code
 *
 * @domain `cscope.sourceforge.io`
 * @programs `cscope`, `ocs`
 * @version `15.9.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install cscope.sourceforge.io`
 * @dependencies `invisible-island.net/ncurses`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cscopesourceforgeio
 * console.log(pkg.name)        // "cscope.sourceforge.io"
 * console.log(pkg.description) // "Tool for browsing source code"
 * console.log(pkg.programs)    // ["cscope", "ocs"]
 * console.log(pkg.versions[0]) // "15.9.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cscope-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cscopesourceforgeioPackage = {
  /**
   * The display name of this package.
   */
  name: 'cscope.sourceforge.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cscope.sourceforge.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Tool for browsing source code' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cscope.sourceforge.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cscope.sourceforge.io' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cscope',
    'ocs',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'invisible-island.net/ncurses',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '15.9.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +cscope.sourceforge.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cscope.sourceforge.io' as const,
}

export type CscopesourceforgeioPackage = typeof cscopesourceforgeioPackage
