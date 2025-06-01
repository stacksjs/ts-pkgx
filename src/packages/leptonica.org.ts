/**
 * **leptonica.org** - Crafters of fine Open Source products
 *
 * @domain `leptonica.org`
 *
 * @install `pkgx leptonica.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.leptonicaorg
 * console.log(pkg.name)        // "leptonica.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/leptonica-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const leptonicaorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'leptonica.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/leptonica.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'leptonica.org' as const,
  fullPath: 'leptonica.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx leptonica.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LeptonicaorgPackage = typeof leptonicaorgPackage
