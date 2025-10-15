/**
 * **awslogs** - Simple command-line tool to read AWS CloudWatch logs
 *
 * @domain `github.com/jorgebastida/awslogs`
 * @programs `awslogs`
 * @version `0.15.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/jorgebastida/awslogs`
 * @dependencies `python.org^3.11`, `github.com/benjaminp/six`, `zlib.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomjorgebastidaawslogs
 * console.log(pkg.name)        // "awslogs"
 * console.log(pkg.description) // "Simple command-line tool to read AWS CloudWatch..."
 * console.log(pkg.programs)    // ["awslogs"]
 * console.log(pkg.versions[0]) // "0.15.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jorgebastida/awslogs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomjorgebastidaawslogsPackage = {
  /**
   * The display name of this package.
   */
  name: 'awslogs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jorgebastida/awslogs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Simple command-line tool to read AWS CloudWatch logs' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/jorgebastida/awslogs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/jorgebastida/awslogs' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/jorgebastida/awslogs' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/jorgebastida/awslogs -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/jorgebastida/awslogs' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'awslogs',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org^3.11',
    'github.com/benjaminp/six',
    'zlib.net',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.15.0',
    '0.14.0',
  ] as const,
  aliases: [] as const,
}

export type GithubcomjorgebastidaawslogsPackage = typeof githubcomjorgebastidaawslogsPackage
