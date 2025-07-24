/**
 * **topgrade** - pkgx package
 *
 * @domain `crates.io/topgrade`
 *
 * @install `launchpad install crates.io/topgrade`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiotopgrade
 * console.log(pkg.name)        // "topgrade"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/topgrade.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiotopgradePackage = {
  /**
   * The display name of this package.
   */
  name: 'topgrade' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/topgrade' as const,
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
  installCommand: 'launchpad install crates.io/topgrade' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/topgrade -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/topgrade' as const,
}

export type CratesiotopgradePackage = typeof cratesiotopgradePackage
