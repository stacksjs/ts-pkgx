/**
 * **volta** - Crafters of fine Open Source products
 *
 * @domain `volta.sh`
 *
 * @install `pkgx volta.sh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.voltash
 * console.log(pkg.name)        // "volta"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/volta-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const voltashPackage = {
  /**
   * The display name of this package.
   */
  name: 'volta' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/volta.sh/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'volta.sh' as const,
  fullPath: 'volta.sh' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx volta.sh' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type VoltashPackage = typeof voltashPackage
