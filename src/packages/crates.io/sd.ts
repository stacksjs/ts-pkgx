/**
 * **sd** - pkgx package
 *
 * @domain `crates.io/sd`
 *
 * @install `launchpad install crates.io/sd`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiosd
 * console.log(pkg.name)        // "sd"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/sd.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiosdPackage = {
  /**
   * The display name of this package.
   */
  name: 'sd' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/sd' as const,
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
  installCommand: 'launchpad install crates.io/sd' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/sd -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/sd' as const,
}

export type CratesiosdPackage = typeof cratesiosdPackage
