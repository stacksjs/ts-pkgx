/**
 * **pier** - pkgx package
 *
 * @domain `crates.io/pier`
 *
 * @install `launchpad install crates.io/pier`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiopier
 * console.log(pkg.name)        // "pier"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/pier.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiopierPackage = {
  /**
   * The display name of this package.
   */
  name: 'pier' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/pier' as const,
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
  installCommand: 'launchpad install crates.io/pier' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/pier -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/pier' as const,
}

export type CratesiopierPackage = typeof cratesiopierPackage
