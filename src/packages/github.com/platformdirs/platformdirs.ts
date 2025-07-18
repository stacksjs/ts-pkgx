/**
 * **github.com/platformdirs/platformdirs** - A small Python module for determining appropriate platform-specific dirs, e.g. a "user data dir".
 *
 * @domain `github.com/platformdirs/platformdirs`
 * @version `4.3.8` (13 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/platformdirs/platformdirs`
 * @dependencies `python.org>=3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomplatformdirsplatformdirs
 * console.log(pkg.name)        // "github.com/platformdirs/platformdirs"
 * console.log(pkg.description) // "A small Python module for determining appropria..."
 * console.log(pkg.versions[0]) // "4.3.8" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/platformdirs/platformdirs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomplatformdirsplatformdirsPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/platformdirs/platformdirs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/platformdirs/platformdirs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A small Python module for determining appropriate platform-specific dirs, e.g. a "user data dir".' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/platformdirs/platformdirs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/platformdirs/platformdirs' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/platformdirs/platformdirs' as const,
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
    '4.3.8',
    '4.3.7',
    '4.3.6',
    '4.3.5',
    '4.3.4',
    '4.3.3',
    '4.3.2',
    '4.3.1',
    '4.3.0',
    '4.2.2',
    '4.2.1',
    '4.2.0',
    '4.1.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/platformdirs/platformdirs -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/platformdirs/platformdirs' as const,
}

export type GithubcomplatformdirsplatformdirsPackage = typeof githubcomplatformdirsplatformdirsPackage
