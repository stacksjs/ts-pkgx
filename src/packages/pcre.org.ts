/**
 * **pcre** - Crafters of fine Open Source products
 *
 * @domain `pcre.org`
 *
 * @install `pkgx pcre.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pcreorg
 * console.log(pkg.name)        // "pcre"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pcre-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pcreorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'pcre' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/pcre.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pcre.org' as const,
  fullPath: 'pcre.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx pcre.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PcreorgPackage = typeof pcreorgPackage
