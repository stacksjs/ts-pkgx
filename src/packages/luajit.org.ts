/**
 * **+luajit.org -- $SHELL -i** - Mirror of the LuaJIT git repository
 *
 * @domain `luajit.org`
 * @programs `luajit`, `luajit-{{version.marketing}}.`
 * @version `2.1.0` (1 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/luajit-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +luajit.org -- $SHELL -i`
 * @aliases `+luajit.org -- $SHELL -i`, `luajit`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.luajitorgSHELLi
 * // Or access via domain
 * const samePkg = pantry.luajitorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "luajit"
 * console.log(pkg.description) // "Mirror of the LuaJIT git repository"
 * console.log(pkg.programs)    // ["luajit", "luajit-{{version.marketing}}."]
 * console.log(pkg.versions[0]) // "2.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/luajit-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const luajitorgSHELLiPackage = {
  /**
   * The display name of this package.
   */
  name: 'luajit' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'luajit.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Mirror of the LuaJIT git repository' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/luajit.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +luajit.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'luajit',
    'luajit-{{version.marketing}}.',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    '+luajit.org -- $SHELL -i',
    'luajit',
  ] as const,
  fullPath: 'luajit.org' as const,
}

export type LuajitorgSHELLiPackage = typeof luajitorgSHELLiPackage
