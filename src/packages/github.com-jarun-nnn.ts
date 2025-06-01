/**
 * **github.com-jarun-nnn** - Go home.
 *
 * @domain `github.com-jarun-nnn`
 *
 * @install `pkgx github.com-jarun-nnn`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomjarunnnn
 * console.log(pkg.name)        // "github.com-jarun-nnn"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com-jarun-nnn.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomjarunnnnPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/github.com-jarun-nnn/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com-jarun-nnn' as const,
  fullPath: 'github.com-jarun-nnn' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com-jarun-nnn' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GithubcomjarunnnnPackage = typeof githubcomjarunnnnPackage
