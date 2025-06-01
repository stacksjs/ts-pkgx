/**
 * **gflags.github.io** - Crafters of fine Open Source products
 *
 * @domain `gflags.github.io`
 *
 * @install `pkgx gflags.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gflagsgithubio
 * console.log(pkg.name)        // "gflags.github.io"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gflags-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gflagsgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'gflags.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/gflags.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gflags.github.io' as const,
  fullPath: 'gflags.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx gflags.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GflagsgithubioPackage = typeof gflagsgithubioPackage
