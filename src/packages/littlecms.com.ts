/**
 * **littlecms.com** - Crafters of fine Open Source products
 *
 * @domain `littlecms.com`
 *
 * @install `pkgx littlecms.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.littlecmscom
 * console.log(pkg.name)        // "littlecms.com"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/littlecms-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const littlecmscomPackage = {
  /**
   * The display name of this package.
   */
  name: 'littlecms.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/littlecms.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'littlecms.com' as const,
  fullPath: 'littlecms.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx littlecms.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LittlecmscomPackage = typeof littlecmscomPackage
