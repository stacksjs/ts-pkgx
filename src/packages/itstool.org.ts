/**
 * **itstool** - Crafters of fine Open Source products
 *
 * @domain `itstool.org`
 *
 * @install `pkgx itstool.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.itstoolorg
 * console.log(pkg.name)        // "itstool"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/itstool-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const itstoolorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'itstool' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/itstool.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'itstool.org' as const,
  fullPath: 'itstool.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx itstool.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ItstoolorgPackage = typeof itstoolorgPackage
