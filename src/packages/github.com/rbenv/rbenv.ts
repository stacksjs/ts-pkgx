/**
 * **rbenv** - Package from pantry: github.com/rbenv/rbenv
 *
 * @domain `github.com/rbenv/rbenv`
 *
 * @install `launchpad install github.com/rbenv/rbenv`
 * @dependencies `ruby-lang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomrbenvrbenv
 * console.log(pkg.name)        // "rbenv"
 * console.log(pkg.description) // "Package from pantry: github.com/rbenv/rbenv"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/rbenv/rbenv.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomrbenvrbenvPackage = {
  /**
   * The display name of this package.
   */
  name: 'rbenv' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/rbenv/rbenv' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/rbenv/rbenv' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/rbenv/rbenv' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/rbenv/rbenv -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/rbenv/rbenv' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'ruby-lang.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/rbenv/rbenv/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomrbenvrbenvPackage = typeof githubcomrbenvrbenvPackage
