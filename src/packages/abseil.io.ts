/**
 * **abseil.io** - Crafters of fine Open Source products
 *
 * @domain `abseil.io`
 *
 * @install `pkgx abseil.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.abseilio
 * console.log(pkg.name)        // "abseil.io"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/abseil-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const abseilioPackage = {
  /**
   * The display name of this package.
   */
  name: 'abseil.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/abseil.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'abseil.io' as const,
  fullPath: 'abseil.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx abseil.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type AbseilioPackage = typeof abseilioPackage
