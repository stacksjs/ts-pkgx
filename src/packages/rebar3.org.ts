/**
 * **rebar3** - Crafters of fine Open Source products
 *
 * @domain `rebar3.org`
 *
 * @install `pkgx rebar3.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rebar3org
 * console.log(pkg.name)        // "rebar3"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rebar3-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rebar3orgPackage = {
  /**
   * The display name of this package.
   */
  name: 'rebar3' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/rebar3.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rebar3.org' as const,
  fullPath: 'rebar3.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx rebar3.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type Rebar3orgPackage = typeof rebar3orgPackage
