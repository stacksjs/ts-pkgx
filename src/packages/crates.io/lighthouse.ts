/**
 * **lighthouse** - pkgx package
 *
 * @domain `crates.io/lighthouse`
 *
 * @install `launchpad install crates.io/lighthouse`
 * @dependencies `zlib.net^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiolighthouse
 * console.log(pkg.name)        // "lighthouse"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/lighthouse.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiolighthousePackage = {
  /**
   * The display name of this package.
   */
  name: 'lighthouse' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/lighthouse' as const,
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
  installCommand: 'launchpad install crates.io/lighthouse' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
  ] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/lighthouse -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/lighthouse' as const,
}

export type CratesiolighthousePackage = typeof cratesiolighthousePackage
