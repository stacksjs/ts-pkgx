/**
 * **sleek** - pkgx package
 *
 * @domain `crates.io/sleek`
 *
 * @install `launchpad install crates.io/sleek`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiosleek
 * console.log(pkg.name)        // "sleek"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/sleek.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiosleekPackage = {
  /**
   * The display name of this package.
   */
  name: 'sleek' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/sleek' as const,
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
  installCommand: 'launchpad install crates.io/sleek' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/sleek -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/sleek' as const,
}

export type CratesiosleekPackage = typeof cratesiosleekPackage
