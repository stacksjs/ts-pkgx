/**
 * **dhall** - Crafters of fine Open Source products
 *
 * @domain `dhall-lang.org`
 *
 * @install `pkgx dhall-lang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.dhalllangorg
 * console.log(pkg.name)        // "dhall"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dhall-lang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dhalllangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'dhall' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/dhall-lang.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dhall-lang.org' as const,
  fullPath: 'dhall-lang.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx dhall-lang.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DhalllangorgPackage = typeof dhalllangorgPackage
