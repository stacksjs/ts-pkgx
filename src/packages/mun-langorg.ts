/**
 * **mun** - Source code for the Mun language and runtime.
 *
 * @domain `mun-lang.org`
 * @programs `mun`
 * @version `0.5.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install mun`
 * @name `mun`
 * @dependencies `invisible-island.net/ncurses@6`, `sourceware.org/libffi@3`, `gnome.org/libxml2@2`
 * @companions `llvm.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mun
 * // Or access via domain
 * const samePkg = pantry.munlangorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mun"
 * console.log(pkg.description) // "Source code for the Mun language and runtime."
 * console.log(pkg.programs)    // ["mun"]
 * console.log(pkg.versions[0]) // "0.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mun-lang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const munPackage = {
  /**
   * The display name of this package.
   */
  name: 'mun' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mun-lang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Source code for the Mun language and runtime.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mun-lang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mun' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mun',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'llvm.org',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'invisible-island.net/ncurses@6',
    'sourceware.org/libffi@3',
    'gnome.org/libxml2@2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.5.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) mun -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mun' as const,
}

export type MunPackage = typeof munPackage
