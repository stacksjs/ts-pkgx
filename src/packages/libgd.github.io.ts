/**
 * **libgd.github.io** - Crafters of fine Open Source products
 *
 * @domain `libgd.github.io`
 *
 * @install `pkgx libgd.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libgdgithubio
 * console.log(pkg.name)        // "libgd.github.io"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libgd-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libgdgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'libgd.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/libgd.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libgd.github.io' as const,
  fullPath: 'libgd.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx libgd.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LibgdgithubioPackage = typeof libgdgithubioPackage
