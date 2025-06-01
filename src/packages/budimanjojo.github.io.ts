/**
 * **budimanjojo.github.io** - Go home.
 *
 * @domain `budimanjojo.github.io`
 *
 * @install `pkgx budimanjojo.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.budimanjojogithubio
 * console.log(pkg.name)        // "budimanjojo.github.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/budimanjojo-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const budimanjojogithubioPackage = {
  /**
   * The display name of this package.
   */
  name: '' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go home.' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/budimanjojo.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'budimanjojo.github.io' as const,
  fullPath: 'budimanjojo.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx budimanjojo.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type BudimanjojogithubioPackage = typeof budimanjojogithubioPackage
