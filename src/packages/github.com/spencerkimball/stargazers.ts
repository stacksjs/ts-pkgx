/**
 * **stargazers** - Package from pantry: github.com/spencerkimball/stargazers
 *
 * @domain `github.com/spencerkimball/stargazers`
 *
 * @install `launchpad install github.com/spencerkimball/stargazers`
 * @dependencies `go.dev^1.16.15`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomspencerkimballstargazers
 * console.log(pkg.name)        // "stargazers"
 * console.log(pkg.description) // "Package from pantry: github.com/spencerkimball/..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/spencerkimball/stargazers.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomspencerkimballstargazersPackage = {
  /**
   * The display name of this package.
   */
  name: 'stargazers' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/spencerkimball/stargazers' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/spencerkimball/stargazers' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install github.com/spencerkimball/stargazers' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.16.15',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/spencerkimball/stargazers/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomspencerkimballstargazersPackage = typeof githubcomspencerkimballstargazersPackage
