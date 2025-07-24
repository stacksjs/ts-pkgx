/**
 * **syft** - pkgx package
 *
 * @domain `anchore.com/syft`
 *
 * @install `launchpad install anchore.com/syft`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.anchorecomsyft
 * console.log(pkg.name)        // "syft"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/anchore-com/syft.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const anchorecomsyftPackage = {
  /**
   * The display name of this package.
   */
  name: 'syft' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'anchore.com/syft' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/anchore/syft' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install anchore.com/syft' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +anchore.com/syft -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install anchore.com/syft' as const,
}

export type AnchorecomsyftPackage = typeof anchorecomsyftPackage
