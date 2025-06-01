/**
 * **github.com-sorah-envchain** - Go home.
 *
 * @domain `github.com-sorah-envchain`
 *
 * @install `pkgx github.com-sorah-envchain`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomsorahenvchain
 * console.log(pkg.name)        // "github.com-sorah-envchain"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com-sorah-envchain.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomsorahenvchainPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/github.com-sorah-envchain/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com-sorah-envchain' as const,
  fullPath: 'github.com-sorah-envchain' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com-sorah-envchain' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GithubcomsorahenvchainPackage = typeof githubcomsorahenvchainPackage
