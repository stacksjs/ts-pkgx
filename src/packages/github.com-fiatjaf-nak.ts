/**
 * **github.com-fiatjaf-nak** - Go home.
 *
 * @domain `github.com-fiatjaf-nak`
 *
 * @install `pkgx github.com-fiatjaf-nak`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomfiatjafnak
 * console.log(pkg.name)        // "github.com-fiatjaf-nak"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com-fiatjaf-nak.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomfiatjafnakPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/github.com-fiatjaf-nak/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com-fiatjaf-nak' as const,
  fullPath: 'github.com-fiatjaf-nak' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com-fiatjaf-nak' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GithubcomfiatjafnakPackage = typeof githubcomfiatjafnakPackage
