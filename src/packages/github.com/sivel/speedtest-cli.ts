/**
 * **speedtest-cli** - Package from pantry: github.com/sivel/speedtest-cli
 *
 * @domain `github.com/sivel/speedtest-cli`
 *
 * @install `launchpad install github.com/sivel/speedtest-cli`
 * @dependencies `python.org>=3.7<3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomsivelspeedtestcli
 * console.log(pkg.name)        // "speedtest-cli"
 * console.log(pkg.description) // "Package from pantry: github.com/sivel/speedtest..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/sivel/speedtest-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomsivelspeedtestcliPackage = {
  /**
   * The display name of this package.
   */
  name: 'speedtest-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/sivel/speedtest-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/sivel/speedtest-cli' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/sivel/speedtest-cli' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/sivel/speedtest-cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/sivel/speedtest-cli' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.7<3.12',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/sivel/speedtest-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomsivelspeedtestcliPackage = typeof githubcomsivelspeedtestcliPackage
