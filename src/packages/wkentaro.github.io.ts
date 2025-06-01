/**
 * **wkentaro.github.io** - Go home.
 *
 * @domain `wkentaro.github.io`
 *
 * @install `pkgx wkentaro.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.wkentarogithubio
 * console.log(pkg.name)        // "wkentaro.github.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wkentaro-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wkentarogithubioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/wkentaro.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wkentaro.github.io' as const,
  fullPath: 'wkentaro.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx wkentaro.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type WkentarogithubioPackage = typeof wkentarogithubioPackage
