/**
 * **sfcgal-config** - Crafters of fine Open Source products
 *
 * @domain `sfcgal.org`
 *
 * @install `pkgx sfcgal.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sfcgalorg
 * console.log(pkg.name)        // "sfcgal-config"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sfcgal-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sfcgalorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'sfcgal-config' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/sfcgal.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sfcgal.org' as const,
  fullPath: 'sfcgal.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx sfcgal.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SfcgalorgPackage = typeof sfcgalorgPackage
