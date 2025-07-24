/**
 * **omekasy** - pkgx package
 *
 * @domain `crates.io/omekasy`
 *
 * @install `launchpad install crates.io/omekasy`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesioomekasy
 * console.log(pkg.name)        // "omekasy"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/omekasy.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesioomekasyPackage = {
  /**
   * The display name of this package.
   */
  name: 'omekasy' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/omekasy' as const,
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
  installCommand: 'launchpad install crates.io/omekasy' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/omekasy -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/omekasy' as const,
}

export type CratesioomekasyPackage = typeof cratesioomekasyPackage
