/**
 * **github.com/benjaminp/six** - Python 2 and 3 compatibility library
 *
 * @domain `github.com/benjaminp/six`
 * @version `1.17.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/benjaminp/six`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcombenjaminpsix
 * console.log(pkg.name)        // "github.com/benjaminp/six"
 * console.log(pkg.description) // "Python 2 and 3 compatibility library"
 * console.log(pkg.versions[0]) // "1.17.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/benjaminp/six.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcombenjaminpsixPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/benjaminp/six' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/benjaminp/six' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Python 2 and 3 compatibility library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/benjaminp/six/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/benjaminp/six' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.17.0',
    '1.16.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/benjaminp/six -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/benjaminp/six' as const,
}

export type GithubcombenjaminpsixPackage = typeof githubcombenjaminpsixPackage
