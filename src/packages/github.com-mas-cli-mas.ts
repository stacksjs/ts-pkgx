/**
 * **github.com-mas-cli-mas** - Go home.
 *
 * @domain `github.com-mas-cli-mas`
 *
 * @install `pkgx github.com-mas-cli-mas`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcommasclimas
 * console.log(pkg.name)        // "github.com-mas-cli-mas"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com-mas-cli-mas.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcommasclimasPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/github.com-mas-cli-mas/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com-mas-cli-mas' as const,
  fullPath: 'github.com-mas-cli-mas' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com-mas-cli-mas' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GithubcommasclimasPackage = typeof githubcommasclimasPackage
