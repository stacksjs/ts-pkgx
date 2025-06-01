/**
 * **mako-render** - Crafters of fine Open Source products
 *
 * @domain `makotemplates.org`
 *
 * @install `pkgx makotemplates.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.makotemplatesorg
 * console.log(pkg.name)        // "mako-render"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/makotemplates-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const makotemplatesorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'mako-render' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/makotemplates.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'makotemplates.org' as const,
  fullPath: 'makotemplates.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx makotemplates.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MakotemplatesorgPackage = typeof makotemplatesorgPackage
