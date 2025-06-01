/**
 * **yui.github.io** - Go home.
 *
 * @domain `yui.github.io`
 *
 * @install `pkgx yui.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.yuigithubio
 * console.log(pkg.name)        // "yui.github.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/yui-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const yuigithubioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/yui.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'yui.github.io' as const,
  fullPath: 'yui.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx yui.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type YuigithubioPackage = typeof yuigithubioPackage
