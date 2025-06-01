/**
 * **lxml.de** - Crafters of fine Open Source products
 *
 * @domain `lxml.de`
 *
 * @install `pkgx lxml.de`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.lxmlde
 * console.log(pkg.name)        // "lxml.de"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lxml-de.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lxmldePackage = {
  /**
   * The display name of this package.
   */
  name: 'lxml.de' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/lxml.de/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'lxml.de' as const,
  fullPath: 'lxml.de' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx lxml.de' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LxmldePackage = typeof lxmldePackage
