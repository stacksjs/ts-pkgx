/**
 * **zig** - Crafters of fine Open Source products
 *
 * @domain `ziglang.org`
 *
 * @install `pkgx ziglang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ziglangorg
 * console.log(pkg.name)        // "zig"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ziglang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ziglangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'zig' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/ziglang.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ziglang.org' as const,
  fullPath: 'ziglang.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx ziglang.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ZiglangorgPackage = typeof ziglangorgPackage
