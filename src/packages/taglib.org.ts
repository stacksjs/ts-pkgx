/**
 * **taglib-config** - Crafters of fine Open Source products
 *
 * @domain `taglib.org`
 *
 * @install `pkgx taglib.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tagliborg
 * console.log(pkg.name)        // "taglib-config"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/taglib-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tagliborgPackage = {
  /**
   * The display name of this package.
   */
  name: 'taglib-config' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/taglib.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'taglib.org' as const,
  fullPath: 'taglib.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx taglib.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TagliborgPackage = typeof tagliborgPackage
