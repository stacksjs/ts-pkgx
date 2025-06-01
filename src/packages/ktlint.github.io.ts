/**
 * **ktlint** - Crafters of fine Open Source products
 *
 * @domain `ktlint.github.io`
 *
 * @install `pkgx ktlint.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ktlintgithubio
 * console.log(pkg.name)        // "ktlint"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ktlint-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ktlintgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'ktlint' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/ktlint.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ktlint.github.io' as const,
  fullPath: 'ktlint.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx ktlint.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type KtlintgithubioPackage = typeof ktlintgithubioPackage
