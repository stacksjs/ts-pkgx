/**
 * **github.com/sivel/speedtest-cli** - pkgx package
 *
 * @domain `github.com/sivel/speedtest/cli`
 *
 * @install `pkgx github.com/sivel/speedtest-cli`
 * @aliases `github.com/sivel/speedtest-cli`, `sivel/speedtest-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomsivelspeedtestcli
 * // Or access via domain
 * const samePkg = pantry.githubcomsivelspeedtestcli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sivel"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/sivel/speedtest/cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomsivelspeedtestcliPackage = {
  /**
   * The display name of this package.
   */
  name: 'sivel' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/sivel/speedtest/cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/sivel/speedtest-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/sivel/speedtest-cli',
    'sivel/speedtest-cli',
  ] as const,
  fullPath: 'github.com/sivel/speedtest-cli' as const,
}

export type GithubcomsivelspeedtestcliPackage = typeof githubcomsivelspeedtestcliPackage
