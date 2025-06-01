/**
 * **ghostscript.com** - Crafters of fine Open Source products
 *
 * @domain `ghostscript.com`
 *
 * @install `pkgx ghostscript.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ghostscriptcom
 * console.log(pkg.name)        // "ghostscript.com"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ghostscript-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ghostscriptcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'ghostscript.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/ghostscript.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ghostscript.com' as const,
  fullPath: 'ghostscript.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx ghostscript.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GhostscriptcomPackage = typeof ghostscriptcomPackage
