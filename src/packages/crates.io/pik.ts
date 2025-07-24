/**
 * **pik** - pkgx package
 *
 * @domain `crates.io/pik`
 *
 * @install `launchpad install crates.io/pik`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiopik
 * console.log(pkg.name)        // "pik"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/pik.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiopikPackage = {
  /**
   * The display name of this package.
   */
  name: 'pik' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/pik' as const,
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
  installCommand: 'launchpad install crates.io/pik' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/pik -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/pik' as const,
}

export type CratesiopikPackage = typeof cratesiopikPackage
