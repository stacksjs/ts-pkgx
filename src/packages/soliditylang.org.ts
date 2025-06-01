/**
 * **soliditylang.org** - Crafters of fine Open Source products
 *
 * @domain `soliditylang.org`
 *
 * @install `pkgx soliditylang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.soliditylangorg
 * console.log(pkg.name)        // "soliditylang.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/soliditylang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const soliditylangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'soliditylang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/soliditylang.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'soliditylang.org' as const,
  fullPath: 'soliditylang.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx soliditylang.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SoliditylangorgPackage = typeof soliditylangorgPackage
