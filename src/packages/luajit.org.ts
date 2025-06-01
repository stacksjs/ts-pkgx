/**
 * **luajit** - Crafters of fine Open Source products
 *
 * @domain `luajit.org`
 *
 * @install `pkgx luajit.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.luajitorg
 * console.log(pkg.name)        // "luajit"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/luajit-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const luajitorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'luajit' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/luajit.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'luajit.org' as const,
  fullPath: 'luajit.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx luajit.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LuajitorgPackage = typeof luajitorgPackage
