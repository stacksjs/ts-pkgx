/**
 * **six** - Package from pantry: github.com/benjaminp/six
 *
 * @domain `github.com/benjaminp/six`
 *
 * @install `launchpad install github.com/benjaminp/six`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcombenjaminpsix
 * console.log(pkg.name)        // "six"
 * console.log(pkg.description) // "Package from pantry: github.com/benjaminp/six"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/benjaminp/six.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcombenjaminpsixPackage = {
  /**
   * The display name of this package.
   */
  name: 'six' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/benjaminp/six' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/benjaminp/six' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/benjaminp/six' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/benjaminp/six -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/benjaminp/six' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/benjaminp/six/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcombenjaminpsixPackage = typeof githubcombenjaminpsixPackage
