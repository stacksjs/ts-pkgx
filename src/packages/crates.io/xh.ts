/**
 * **xh** - pkgx package
 *
 * @domain `crates.io/xh`
 *
 * @install `launchpad install crates.io/xh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesioxh
 * console.log(pkg.name)        // "xh"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/xh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesioxhPackage = {
  /**
   * The display name of this package.
   */
  name: 'xh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/xh' as const,
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
  installCommand: 'launchpad install crates.io/xh' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/xh -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/xh' as const,
}

export type CratesioxhPackage = typeof cratesioxhPackage
