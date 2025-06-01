/**
 * **github.com** - Go home.
 *
 * @domain `github.com`
 *
 * @install `pkgx github.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcom
 * console.log(pkg.name)        // "github.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/github.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com' as const,
  fullPath: 'github.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GithubcomPackage = typeof githubcomPackage
