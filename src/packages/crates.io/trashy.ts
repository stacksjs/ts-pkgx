/**
 * **trashy** - pkgx package
 *
 * @domain `crates.io/trashy`
 *
 * @install `launchpad install crates.io/trashy`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiotrashy
 * console.log(pkg.name)        // "trashy"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/trashy.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiotrashyPackage = {
  /**
   * The display name of this package.
   */
  name: 'trashy' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/trashy' as const,
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
  installCommand: 'launchpad install crates.io/trashy' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/trashy -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/trashy' as const,
}

export type CratesiotrashyPackage = typeof cratesiotrashyPackage
