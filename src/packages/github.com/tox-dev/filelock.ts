/**
 * **filelock** - Package from pantry: github.com/tox-dev/filelock
 *
 * @domain `github.com/tox-dev/filelock`
 *
 * @install `launchpad install github.com/tox-dev/filelock`
 * @dependencies `python.org>=3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomtoxdevfilelock
 * console.log(pkg.name)        // "filelock"
 * console.log(pkg.description) // "Package from pantry: github.com/tox-dev/filelock"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/tox-dev/filelock.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomtoxdevfilelockPackage = {
  /**
   * The display name of this package.
   */
  name: 'filelock' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/tox-dev/filelock' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/tox-dev/filelock' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/tox-dev/filelock' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/tox-dev/filelock -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/tox-dev/filelock' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.11',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/tox-dev/filelock/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomtoxdevfilelockPackage = typeof githubcomtoxdevfilelockPackage
