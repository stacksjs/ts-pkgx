/**
 * **ctags** - Crafters of fine Open Source products
 *
 * @domain `ctags.io`
 *
 * @install `pkgx ctags.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ctagsio
 * console.log(pkg.name)        // "ctags"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ctags-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ctagsioPackage = {
  /**
   * The display name of this package.
   */
  name: 'ctags' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/ctags.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ctags.io' as const,
  fullPath: 'ctags.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx ctags.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CtagsioPackage = typeof ctagsioPackage
