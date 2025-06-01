/**
 * **attrs.org** - Crafters of fine Open Source products
 *
 * @domain `attrs.org`
 *
 * @install `pkgx attrs.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.attrsorg
 * console.log(pkg.name)        // "attrs.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/attrs-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const attrsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'attrs.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/attrs.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'attrs.org' as const,
  fullPath: 'attrs.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx attrs.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type AttrsorgPackage = typeof attrsorgPackage
