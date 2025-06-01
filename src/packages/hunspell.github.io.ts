/**
 * **hunspell** - Crafters of fine Open Source products
 *
 * @domain `hunspell.github.io`
 *
 * @install `pkgx hunspell.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.hunspellgithubio
 * console.log(pkg.name)        // "hunspell"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/hunspell-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hunspellgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'hunspell' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/hunspell.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'hunspell.github.io' as const,
  fullPath: 'hunspell.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx hunspell.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type HunspellgithubioPackage = typeof hunspellgithubioPackage
