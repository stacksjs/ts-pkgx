/**
 * **infracost** - Crafters of fine Open Source products
 *
 * @domain `infracost.io`
 *
 * @install `pkgx infracost.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.infracostio
 * console.log(pkg.name)        // "infracost"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/infracost-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const infracostioPackage = {
  /**
   * The display name of this package.
   */
  name: 'infracost' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/infracost.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'infracost.io' as const,
  fullPath: 'infracost.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx infracost.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type InfracostioPackage = typeof infracostioPackage
