/**
 * **luarocks** - LuaRocks is the package manager for the Lua programming language.
 *
 * @domain `luarocks.org`
 * @programs `luarocks`, `luarocks-admin`
 * @version `3.12.2` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install luarocks`
 * @name `luarocks`
 * @dependencies `lua.org`, `info-zip.org/unzip`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.luarocks
 * // Or access via domain
 * const samePkg = pantry.luarocksorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "luarocks"
 * console.log(pkg.description) // "LuaRocks is the package manager for the Lua pro..."
 * console.log(pkg.programs)    // ["luarocks", "luarocks-admin"]
 * console.log(pkg.versions[0]) // "3.12.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/luarocks-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const luarocksPackage = {
  /**
   * The display name of this package.
   */
  name: 'luarocks' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'luarocks.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'LuaRocks is the package manager for the Lua programming language.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/luarocks.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install luarocks' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'luarocks',
    'luarocks-admin',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'lua.org',
    'info-zip.org/unzip',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.12.2',
    '3.12.1',
    '3.12.0',
    '3.11.1',
    '3.11.0',
    '3.10.0',
    '3.9.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +luarocks.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install luarocks' as const,
}

export type LuarocksPackage = typeof luarocksPackage
