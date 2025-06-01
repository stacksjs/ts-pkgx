/**
 * **quickwit** - Crafters of fine Open Source products
 *
 * @domain `quickwit.io`
 *
 * @install `pkgx quickwit.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.quickwitio
 * console.log(pkg.name)        // "quickwit"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/quickwit-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const quickwitioPackage = {
  /**
   * The display name of this package.
   */
  name: 'quickwit' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/quickwit.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'quickwit.io' as const,
  fullPath: 'quickwit.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx quickwit.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type QuickwitioPackage = typeof quickwitioPackage
