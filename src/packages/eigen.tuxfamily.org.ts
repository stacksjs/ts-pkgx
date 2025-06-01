/**
 * **eigen.tuxfamily.org** - Crafters of fine Open Source products
 *
 * @domain `eigen.tuxfamily.org`
 *
 * @install `pkgx eigen.tuxfamily.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.eigentuxfamilyorg
 * console.log(pkg.name)        // "eigen.tuxfamily.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/eigen-tuxfamily-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const eigentuxfamilyorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'eigen.tuxfamily.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/eigen.tuxfamily.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'eigen.tuxfamily.org' as const,
  fullPath: 'eigen.tuxfamily.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx eigen.tuxfamily.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type EigentuxfamilyorgPackage = typeof eigentuxfamilyorgPackage
