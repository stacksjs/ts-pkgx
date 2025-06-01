/**
 * **opendap.org** - Crafters of fine Open Source products
 *
 * @domain `opendap.org`
 *
 * @install `pkgx opendap.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.opendaporg
 * console.log(pkg.name)        // "opendap.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/opendap-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const opendaporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'opendap.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/opendap.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'opendap.org' as const,
  fullPath: 'opendap.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx opendap.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OpendaporgPackage = typeof opendaporgPackage
