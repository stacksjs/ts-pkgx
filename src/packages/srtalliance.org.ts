/**
 * **srt** - Crafters of fine Open Source products
 *
 * @domain `srtalliance.org`
 *
 * @install `pkgx srtalliance.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.srtallianceorg
 * console.log(pkg.name)        // "srt"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/srtalliance-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const srtallianceorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'srt' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/srtalliance.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'srtalliance.org' as const,
  fullPath: 'srtalliance.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx srtalliance.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SrtallianceorgPackage = typeof srtallianceorgPackage
