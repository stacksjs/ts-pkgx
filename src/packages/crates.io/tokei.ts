/**
 * **tokei** - pkgx package
 *
 * @domain `crates.io/tokei`
 *
 * @install `launchpad install crates.io/tokei`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiotokei
 * console.log(pkg.name)        // "tokei"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/tokei.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiotokeiPackage = {
  /**
   * The display name of this package.
   */
  name: 'tokei' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/tokei' as const,
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
  installCommand: 'launchpad install crates.io/tokei' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/tokei -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/tokei' as const,
}

export type CratesiotokeiPackage = typeof cratesiotokeiPackage
