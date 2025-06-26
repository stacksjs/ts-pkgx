/**
 * **usql** - Package from pantry: github.com/xo/usql
 *
 * @domain `github.com/xo/usql`
 *
 * @install `launchpad install github.com/xo/usql`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomxousql
 * console.log(pkg.name)        // "usql"
 * console.log(pkg.description) // "Package from pantry: github.com/xo/usql"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/xo/usql.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomxousqlPackage = {
  /**
   * The display name of this package.
   */
  name: 'usql' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/xo/usql' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/xo/usql' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/xo/usql' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/xo/usql -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/xo/usql' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/xo/usql/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomxousqlPackage = typeof githubcomxousqlPackage
