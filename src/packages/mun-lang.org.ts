/**
 * **mun** - Source code for the Mun language and runtime.
 *
 * @domain `mun-lang.org`
 * @programs `mun`
 * @version `0.5.0` (1 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/mun-lang-org.md
 *
 * @install `sh <(curl https://pkgx.sh) mun`
 * @dependencies `invisible-island.net/ncurses@6`, `sourceware.org/libffi@3`, `gnome.org/libxml2@2`
 * @companions `llvm.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.munlangorg
 * console.log(pkg.name)        // "mun"
 * console.log(pkg.description) // "Source code for the Mun language and runtime."
 * console.log(pkg.programs)    // ["mun"]
 * console.log(pkg.versions[0]) // "0.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mun-lang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const munlangorgPackage = {
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
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) mun' as const,
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
  fullPath: 'mun-lang.org' as const,
  aliases: [] as const,
}

export type MunlangorgPackage = typeof munlangorgPackage
