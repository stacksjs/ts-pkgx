/**
 * **elixir-lang.org** - Crafters of fine Open Source products
 *
 * @domain `elixir-lang.org`
 *
 * @install `pkgx elixir-lang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.elixirlangorg
 * console.log(pkg.name)        // "elixir-lang.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/elixir-lang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const elixirlangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'elixir-lang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/elixir-lang.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'elixir-lang.org' as const,
  fullPath: 'elixir-lang.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx elixir-lang.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ElixirlangorgPackage = typeof elixirlangorgPackage
