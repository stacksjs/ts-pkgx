/**
 * **pixman.org** - Crafters of fine Open Source products
 *
 * @domain `pixman.org`
 *
 * @install `pkgx pixman.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pixmanorg
 * console.log(pkg.name)        // "pixman.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pixman-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pixmanorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'pixman.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/pixman.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pixman.org' as const,
  fullPath: 'pixman.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx pixman.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PixmanorgPackage = typeof pixmanorgPackage
