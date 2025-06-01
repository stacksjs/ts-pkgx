/**
 * **lua** - Crafters of fine Open Source products
 *
 * @domain `lua.org`
 *
 * @install `pkgx lua.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.luaorg
 * console.log(pkg.name)        // "lua"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lua-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const luaorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'lua' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/lua.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'lua.org' as const,
  fullPath: 'lua.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx lua.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LuaorgPackage = typeof luaorgPackage
