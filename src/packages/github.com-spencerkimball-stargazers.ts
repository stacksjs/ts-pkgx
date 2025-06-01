/**
 * **github.com-spencerkimball-stargazers** - Go home.
 *
 * @domain `github.com-spencerkimball-stargazers`
 *
 * @install `pkgx github.com-spencerkimball-stargazers`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomspencerkimballstargazers
 * console.log(pkg.name)        // "github.com-spencerkimball-stargazers"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com-spencerkimball-stargazers.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomspencerkimballstargazersPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/github.com-spencerkimball-stargazers/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com-spencerkimball-stargazers' as const,
  fullPath: 'github.com-spencerkimball-stargazers' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com-spencerkimball-stargazers' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GithubcomspencerkimballstargazersPackage = typeof githubcomspencerkimballstargazersPackage
