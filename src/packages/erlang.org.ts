/**
 * **erlang.org** - Crafters of fine Open Source products
 *
 * @domain `erlang.org`
 *
 * @install `pkgx erlang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.erlangorg
 * console.log(pkg.name)        // "erlang.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/erlang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const erlangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'erlang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/erlang.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'erlang.org' as const,
  fullPath: 'erlang.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx erlang.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ErlangorgPackage = typeof erlangorgPackage
