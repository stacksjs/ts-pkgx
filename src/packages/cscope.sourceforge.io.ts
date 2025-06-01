/**
 * **cscope.sourceforge.io** - Crafters of fine Open Source products
 *
 * @domain `cscope.sourceforge.io`
 *
 * @install `pkgx cscope.sourceforge.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cscopesourceforgeio
 * console.log(pkg.name)        // "cscope.sourceforge.io"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cscope-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cscopesourceforgeioPackage = {
  /**
   * The display name of this package.
   */
  name: 'cscope.sourceforge.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/cscope.sourceforge.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cscope.sourceforge.io' as const,
  fullPath: 'cscope.sourceforge.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx cscope.sourceforge.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CscopesourceforgeioPackage = typeof cscopesourceforgeioPackage
