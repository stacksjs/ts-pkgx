/**
 * **ghq** - Package from pantry: github.com/x-motemen/ghq
 *
 * @domain `github.com/x-motemen/ghq`
 *
 * @install `launchpad install github.com/x-motemen/ghq`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomxmotemenghq
 * console.log(pkg.name)        // "ghq"
 * console.log(pkg.description) // "Package from pantry: github.com/x-motemen/ghq"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/x-motemen/ghq.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomxmotemenghqPackage = {
  /**
   * The display name of this package.
   */
  name: 'ghq' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/x-motemen/ghq' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/x-motemen/ghq' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/x-motemen/ghq' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/x-motemen/ghq -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/x-motemen/ghq' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/x-motemen/ghq/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomxmotemenghqPackage = typeof githubcomxmotemenghqPackage
