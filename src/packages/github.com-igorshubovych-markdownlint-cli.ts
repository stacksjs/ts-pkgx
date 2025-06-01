/**
 * **github.com-igorshubovych-markdownlint-cli** - Go home.
 *
 * @domain `github.com-igorshubovych-markdownlint-cli`
 *
 * @install `pkgx github.com-igorshubovych-markdownlint-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomigorshubovychmarkdownlintcli
 * console.log(pkg.name)        // "github.com-igorshubovych-markdownlint-cli"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com-igorshubovych-markdownlint-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomigorshubovychmarkdownlintcliPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/github.com-igorshubovych-markdownlint-cli/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com-igorshubovych-markdownlint-cli' as const,
  fullPath: 'github.com-igorshubovych-markdownlint-cli' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com-igorshubovych-markdownlint-cli' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GithubcomigorshubovychmarkdownlintcliPackage = typeof githubcomigorshubovychmarkdownlintcliPackage
