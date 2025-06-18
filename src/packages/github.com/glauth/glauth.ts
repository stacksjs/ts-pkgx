/**
 * **glauth** - Package from pantry: github.com/glauth/glauth
 *
 * @domain `github.com/glauth/glauth`
 *
 * @install `launchpad install github.com/glauth/glauth`
 * @dependencies `git-scm.org`, `go.dev^1.23`, `gnu.org/gcc`, ... (+3 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomglauthglauth
 * console.log(pkg.name)        // "glauth"
 * console.log(pkg.description) // "Package from pantry: github.com/glauth/glauth"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/glauth/glauth.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomglauthglauthPackage = {
  /**
   * The display name of this package.
   */
  name: 'glauth' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/glauth/glauth' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/glauth/glauth' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install github.com/glauth/glauth' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'git-scm.org',
    'go.dev^1.23',
    'gnu.org/gcc',
    'gnu.org/coreutils',
    'stedolan.github.io/jq^1.7',
    'linux-pam.org^1.5.3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/glauth/glauth/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomglauthglauthPackage = typeof githubcomglauthglauthPackage
