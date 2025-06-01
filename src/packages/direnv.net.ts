/**
 * **direnv** - Crafters of fine Open Source products
 *
 * @domain `direnv.net`
 *
 * @install `pkgx direnv.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.direnvnet
 * console.log(pkg.name)        // "direnv"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/direnv-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const direnvnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'direnv' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/direnv.net/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'direnv.net' as const,
  fullPath: 'direnv.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx direnv.net' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DirenvnetPackage = typeof direnvnetPackage
