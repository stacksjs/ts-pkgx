/**
 * **rmz** - pkgx package
 *
 * @domain `crates.io/rmz`
 *
 * @install `launchpad install crates.io/rmz`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiormz
 * console.log(pkg.name)        // "rmz"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/rmz.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiormzPackage = {
  /**
   * The display name of this package.
   */
  name: 'rmz' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/rmz' as const,
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
  installCommand: 'launchpad install crates.io/rmz' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/rmz -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/rmz' as const,
}

export type CratesiormzPackage = typeof cratesiormzPackage
