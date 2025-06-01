/**
 * **temporal** - Crafters of fine Open Source products
 *
 * @domain `temporal.io`
 *
 * @install `pkgx temporal.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.temporalio
 * console.log(pkg.name)        // "temporal"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/temporal-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const temporalioPackage = {
  /**
   * The display name of this package.
   */
  name: 'temporal' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/temporal.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'temporal.io' as const,
  fullPath: 'temporal.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx temporal.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TemporalioPackage = typeof temporalioPackage
