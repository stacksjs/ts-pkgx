/**
 * **ast-grep.github.io** - Crafters of fine Open Source products
 *
 * @domain `ast-grep.github.io`
 *
 * @install `pkgx ast-grep.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.astgrepgithubio
 * console.log(pkg.name)        // "ast-grep.github.io"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ast-grep-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const astgrepgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'ast-grep.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/ast-grep.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ast-grep.github.io' as const,
  fullPath: 'ast-grep.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx ast-grep.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type AstgrepgithubioPackage = typeof astgrepgithubioPackage
