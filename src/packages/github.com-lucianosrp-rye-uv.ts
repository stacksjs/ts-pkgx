/**
 * **github.com-lucianosrp-rye-uv** - Go home.
 *
 * @domain `github.com-lucianosrp-rye-uv`
 *
 * @install `pkgx github.com-lucianosrp-rye-uv`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomlucianosrpryeuv
 * console.log(pkg.name)        // "github.com-lucianosrp-rye-uv"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com-lucianosrp-rye-uv.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomlucianosrpryeuvPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/github.com-lucianosrp-rye-uv/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com-lucianosrp-rye-uv' as const,
  fullPath: 'github.com-lucianosrp-rye-uv' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com-lucianosrp-rye-uv' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GithubcomlucianosrpryeuvPackage = typeof githubcomlucianosrpryeuvPackage
