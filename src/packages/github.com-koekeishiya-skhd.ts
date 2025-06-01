/**
 * **github.com-koekeishiya-skhd** - Go home.
 *
 * @domain `github.com-koekeishiya-skhd`
 *
 * @install `pkgx github.com-koekeishiya-skhd`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomkoekeishiyaskhd
 * console.log(pkg.name)        // "github.com-koekeishiya-skhd"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com-koekeishiya-skhd.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomkoekeishiyaskhdPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/github.com-koekeishiya-skhd/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com-koekeishiya-skhd' as const,
  fullPath: 'github.com-koekeishiya-skhd' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com-koekeishiya-skhd' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GithubcomkoekeishiyaskhdPackage = typeof githubcomkoekeishiyaskhdPackage
