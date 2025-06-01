/**
 * **htop** - Crafters of fine Open Source products
 *
 * @domain `htop.dev`
 *
 * @install `pkgx htop.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.htopdev
 * console.log(pkg.name)        // "htop"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/htop-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const htopdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'htop' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/htop.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'htop.dev' as const,
  fullPath: 'htop.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx htop.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type HtopdevPackage = typeof htopdevPackage
