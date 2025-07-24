/**
 * **mask** - pkgx package
 *
 * @domain `crates.io/mask`
 *
 * @install `launchpad install crates.io/mask`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiomask
 * console.log(pkg.name)        // "mask"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/mask.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiomaskPackage = {
  /**
   * The display name of this package.
   */
  name: 'mask' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/mask' as const,
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
  installCommand: 'launchpad install crates.io/mask' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/mask -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/mask' as const,
}

export type CratesiomaskPackage = typeof cratesiomaskPackage
