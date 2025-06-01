/**
 * **tmate** - Crafters of fine Open Source products
 *
 * @domain `tmate.io`
 *
 * @install `pkgx tmate.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tmateio
 * console.log(pkg.name)        // "tmate"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tmate-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tmateioPackage = {
  /**
   * The display name of this package.
   */
  name: 'tmate' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/tmate.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tmate.io' as const,
  fullPath: 'tmate.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx tmate.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TmateioPackage = typeof tmateioPackage
