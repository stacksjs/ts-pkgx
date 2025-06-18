/**
 * **lua** - Powerful, lightweight programming language
 *
 * @domain `lua.org`
 * @programs `lua`, `luac`
 * @version `5.4.8` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +lua.org -- $SHELL -i`
 * @name `lua`
 * @dependencies `gnu.org/readline`
 * @companions `luarocks.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.lua
 * // Or access via domain
 * const samePkg = pantry.luaorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "lua"
 * console.log(pkg.description) // "Powerful, lightweight programming language"
 * console.log(pkg.programs)    // ["lua", "luac"]
 * console.log(pkg.versions[0]) // "5.4.8" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lua-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const luaPackage = {
  /**
   * The display name of this package.
   */
  name: 'lua' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'lua.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Powerful, lightweight programming language' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/lua.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +lua.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'lua',
    'luac',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'luarocks.org',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/readline',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.4.8',
    '5.4.7',
    '5.4.6',
    '5.4.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'lua' as const,
}

export type LuaPackage = typeof luaPackage
