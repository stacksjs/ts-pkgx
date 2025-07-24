/**
 * **ox** - pkgx package
 *
 * @domain `crates.io/ox`
 *
 * @install `launchpad install crates.io/ox`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesioox
 * console.log(pkg.name)        // "ox"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/ox.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiooxPackage = {
  /**
   * The display name of this package.
   */
  name: 'ox' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/ox' as const,
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
  installCommand: 'launchpad install crates.io/ox' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/ox -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/ox' as const,
}

export type CratesiooxPackage = typeof cratesiooxPackage
