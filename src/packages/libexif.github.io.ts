/**
 * **libexif.github.io** - Crafters of fine Open Source products
 *
 * @domain `libexif.github.io`
 *
 * @install `pkgx libexif.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libexifgithubio
 * console.log(pkg.name)        // "libexif.github.io"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libexif-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libexifgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'libexif.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/libexif.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libexif.github.io' as const,
  fullPath: 'libexif.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx libexif.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LibexifgithubioPackage = typeof libexifgithubioPackage
