/**
 * **tv-cli** - pkgx package
 *
 * @domain `crates.io/tv-cli`
 *
 * @install `launchpad install crates.io/tv-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiotvcli
 * console.log(pkg.name)        // "tv-cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/tv-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiotvcliPackage = {
  /**
   * The display name of this package.
   */
  name: 'tv-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/tv-cli' as const,
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
  installCommand: 'launchpad install crates.io/tv-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/tv-cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/tv-cli' as const,
}

export type CratesiotvcliPackage = typeof cratesiotvcliPackage
