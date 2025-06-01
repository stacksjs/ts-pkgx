/**
 * **typst** - Crafters of fine Open Source products
 *
 * @domain `typst.app`
 *
 * @install `pkgx typst.app`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.typstapp
 * console.log(pkg.name)        // "typst"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/typst-app.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const typstappPackage = {
  /**
   * The display name of this package.
   */
  name: 'typst' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/typst.app/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'typst.app' as const,
  fullPath: 'typst.app' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx typst.app' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TypstappPackage = typeof typstappPackage
