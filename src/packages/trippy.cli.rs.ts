/**
 * **trip** - Crafters of fine Open Source products
 *
 * @domain `trippy.cli.rs`
 *
 * @install `pkgx trippy.cli.rs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.trippyclirs
 * console.log(pkg.name)        // "trip"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/trippy-cli-rs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const trippyclirsPackage = {
  /**
   * The display name of this package.
   */
  name: 'trip' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/trippy.cli.rs/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'trippy.cli.rs' as const,
  fullPath: 'trippy.cli.rs' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx trippy.cli.rs' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TrippyclirsPackage = typeof trippyclirsPackage
