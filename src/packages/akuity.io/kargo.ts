/**
 * **kargo** - pkgx package
 *
 * @domain `akuity.io/kargo`
 *
 * @install `launchpad install akuity.io/kargo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.akuityiokargo
 * console.log(pkg.name)        // "kargo"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/akuity-io/kargo.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const akuityiokargoPackage = {
  /**
   * The display name of this package.
   */
  name: 'kargo' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'akuity.io/kargo' as const,
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
  installCommand: 'launchpad install akuity.io/kargo' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +akuity.io/kargo -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install akuity.io/kargo' as const,
}

export type AkuityiokargoPackage = typeof akuityiokargoPackage
