/**
 * **speedtest** - Command line interface for testing internet bandwidth using speedtest.net
 *
 * @domain `github.com/sivel/speedtest-cli`
 * @programs `speedtest-cli`, `speedtest`
 * @version `2.1.3` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install speedtest`
 * @name `speedtest`
 * @dependencies `python.org>=3.7<3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.speedtest
 * // Or access via domain
 * const samePkg = pantry.githubcomsivelspeedtestcli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "speedtest"
 * console.log(pkg.description) // "Command line interface for testing internet ban..."
 * console.log(pkg.programs)    // ["speedtest-cli", "speedtest"]
 * console.log(pkg.versions[0]) // "2.1.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/sivel/speedtest-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const speedtestPackage = {
  /**
   * The display name of this package.
   */
  name: 'speedtest' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/sivel/speedtest-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Command line interface for testing internet bandwidth using speedtest.net' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/sivel/speedtest-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install speedtest' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'speedtest-cli',
    'speedtest',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.7<3.12',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.1.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/sivel/speedtest-cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install speedtest' as const,
}

export type SpeedtestPackage = typeof speedtestPackage
