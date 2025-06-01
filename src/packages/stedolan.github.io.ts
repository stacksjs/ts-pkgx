/**
 * **stedolan.github.io** - Go home.
 *
 * @domain `stedolan.github.io`
 *
 * @install `pkgx stedolan.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.stedolangithubio
 * console.log(pkg.name)        // "stedolan.github.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/stedolan-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const stedolangithubioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/stedolan.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'stedolan.github.io' as const,
  fullPath: 'stedolan.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx stedolan.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type StedolangithubioPackage = typeof stedolangithubioPackage
