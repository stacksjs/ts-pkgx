/**
 * **macfuse.github.io** - Crafters of fine Open Source products
 *
 * @domain `macfuse.github.io`
 *
 * @install `pkgx macfuse.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.macfusegithubio
 * console.log(pkg.name)        // "macfuse.github.io"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/macfuse-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const macfusegithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'macfuse.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/macfuse.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'macfuse.github.io' as const,
  fullPath: 'macfuse.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx macfuse.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MacfusegithubioPackage = typeof macfusegithubioPackage
