/**
 * **cmocka.org** - pkgx package
 *
 * @domain `cmocka.org`
 *
 * @install `launchpad install cmocka.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cmockaorg
 * console.log(pkg.name)        // "cmocka.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cmocka-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cmockaorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'cmocka.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cmocka.org' as const,
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
  installCommand: 'launchpad install cmocka.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +cmocka.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cmocka.org' as const,
}

export type CmockaorgPackage = typeof cmockaorgPackage
