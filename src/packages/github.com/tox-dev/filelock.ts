/**
 * **github.com/tox-dev/filelock** - A platform-independent file lock for Python.
 *
 * @domain `github.com/tox-dev/filelock`
 * @version `3.19.1` (16 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/tox-dev/filelock`
 * @dependencies `python.org>=3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomtoxdevfilelock
 * console.log(pkg.name)        // "github.com/tox-dev/filelock"
 * console.log(pkg.description) // "A platform-independent file lock for Python."
 * console.log(pkg.versions[0]) // "3.19.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/tox-dev/filelock.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomtoxdevfilelockPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/tox-dev/filelock' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/tox-dev/filelock' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A platform-independent file lock for Python.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/tox-dev/filelock/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/tox-dev/filelock' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/tox-dev/filelock' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.19.1',
    '3.19.0',
    '3.18.0',
    '3.17.0',
    '3.16.1',
    '3.16.0',
    '3.15.4',
    '3.15.3',
    '3.15.2',
    '3.15.1',
    '3.15.0',
    '3.14.0',
    '3.13.4',
    '3.13.3',
    '3.13.2',
    '3.13.1',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/tox-dev/filelock -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/tox-dev/filelock' as const,
}

export type GithubcomtoxdevfilelockPackage = typeof githubcomtoxdevfilelockPackage
