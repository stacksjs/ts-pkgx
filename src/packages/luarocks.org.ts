/**
 * **luarocks** - Crafters of fine Open Source products
 *
 * @domain `luarocks.org`
 *
 * @install `pkgx luarocks.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.luarocksorg
 * console.log(pkg.name)        // "luarocks"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/luarocks-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const luarocksorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'luarocks' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/luarocks.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'luarocks.org' as const,
  fullPath: 'luarocks.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx luarocks.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LuarocksorgPackage = typeof luarocksorgPackage
