/**
 * **abseil.io** - pkgx package
 *
 * @domain `abseil.io`
 *
 * @install `launchpad install abseil.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.abseilio
 * console.log(pkg.name)        // "abseil.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/abseil-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const abseilioPackage = {
  /**
   * The display name of this package.
   */
  name: 'abseil.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'abseil.io' as const,
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
  installCommand: 'launchpad install abseil.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +abseil.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install abseil.io' as const,
}

export type AbseilioPackage = typeof abseilioPackage
