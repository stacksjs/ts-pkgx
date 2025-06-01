/**
 * **github.com-MinseokOh-toml-cli** - Go home.
 *
 * @domain `github.com-MinseokOh-toml-cli`
 *
 * @install `pkgx github.com-MinseokOh-toml-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomminseokohtomlcli
 * console.log(pkg.name)        // "github.com-MinseokOh-toml-cli"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com-MinseokOh-toml-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomminseokohtomlcliPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/github.com-MinseokOh-toml-cli/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com-MinseokOh-toml-cli' as const,
  fullPath: 'github.com-MinseokOh-toml-cli' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com-MinseokOh-toml-cli' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GithubcomminseokohtomlcliPackage = typeof githubcomminseokohtomlcliPackage
