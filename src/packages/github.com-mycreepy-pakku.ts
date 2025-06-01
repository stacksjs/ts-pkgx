/**
 * **github.com-mycreepy-pakku** - Go home.
 *
 * @domain `github.com-mycreepy-pakku`
 *
 * @install `pkgx github.com-mycreepy-pakku`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcommycreepypakku
 * console.log(pkg.name)        // "github.com-mycreepy-pakku"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com-mycreepy-pakku.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcommycreepypakkuPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/github.com-mycreepy-pakku/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com-mycreepy-pakku' as const,
  fullPath: 'github.com-mycreepy-pakku' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com-mycreepy-pakku' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GithubcommycreepypakkuPackage = typeof githubcommycreepypakkuPackage
