/**
 * **pugixml.org** - Crafters of fine Open Source products
 *
 * @domain `pugixml.org`
 *
 * @install `pkgx pugixml.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pugixmlorg
 * console.log(pkg.name)        // "pugixml.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pugixml-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pugixmlorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'pugixml.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/pugixml.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pugixml.org' as const,
  fullPath: 'pugixml.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx pugixml.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PugixmlorgPackage = typeof pugixmlorgPackage
