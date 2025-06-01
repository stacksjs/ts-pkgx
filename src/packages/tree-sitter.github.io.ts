/**
 * **tree-sitter** - Crafters of fine Open Source products
 *
 * @domain `tree-sitter.github.io`
 *
 * @install `pkgx tree-sitter.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.treesittergithubio
 * console.log(pkg.name)        // "tree-sitter"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tree-sitter-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const treesittergithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'tree-sitter' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/tree-sitter.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tree-sitter.github.io' as const,
  fullPath: 'tree-sitter.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx tree-sitter.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TreesittergithubioPackage = typeof treesittergithubioPackage
