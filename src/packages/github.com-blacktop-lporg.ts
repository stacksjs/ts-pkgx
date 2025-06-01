/**
 * **github.com-blacktop-lporg** - Go home.
 *
 * @domain `github.com-blacktop-lporg`
 *
 * @install `pkgx github.com-blacktop-lporg`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomblacktoplporg
 * console.log(pkg.name)        // "github.com-blacktop-lporg"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com-blacktop-lporg.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomblacktoplporgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/github.com-blacktop-lporg/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com-blacktop-lporg' as const,
  fullPath: 'github.com-blacktop-lporg' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com-blacktop-lporg' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GithubcomblacktoplporgPackage = typeof githubcomblacktoplporgPackage
