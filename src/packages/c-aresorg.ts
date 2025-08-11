/**
 * **c-ares.org** - pkgx package
 *
 * @domain `c-ares.org`
 *
 * @install `launchpad install c-ares.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.caresorg
 * console.log(pkg.name)        // "c-ares.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/c-ares-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const caresorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'c-ares.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'c-ares.org' as const,
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
  installCommand: 'launchpad install c-ares.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +c-ares.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install c-ares.org' as const,
}

export type CaresorgPackage = typeof caresorgPackage
