/**
 * **spider_cli** - pkgx package
 *
 * @domain `crates.io/spider_cli`
 *
 * @install `launchpad install crates.io/spider_cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiospider_cli
 * console.log(pkg.name)        // "spider_cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/spider_cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiospider_cliPackage = {
  /**
   * The display name of this package.
   */
  name: 'spider_cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/spider_cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/spider_cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/spider_cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/spider_cli' as const,
}

export type Cratesiospider_cliPackage = typeof cratesiospider_cliPackage
