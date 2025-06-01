/**
 * **nu** - Crafters of fine Open Source products
 *
 * @domain `nushell.sh`
 *
 * @install `pkgx nushell.sh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.nushellsh
 * console.log(pkg.name)        // "nu"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nushell-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nushellshPackage = {
  /**
   * The display name of this package.
   */
  name: 'nu' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/nushell.sh/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nushell.sh' as const,
  fullPath: 'nushell.sh' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx nushell.sh' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type NushellshPackage = typeof nushellshPackage
