/**
 * **nspr** - Package from pantry: mozilla.org/nspr
 *
 * @domain `mozilla.org/nspr`
 *
 * @install `launchpad install mozilla.org/nspr`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mozillaorgnspr
 * console.log(pkg.name)        // "nspr"
 * console.log(pkg.description) // "Package from pantry: mozilla.org/nspr"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mozilla-org/nspr.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mozillaorgnsprPackage = {
  /**
   * The display name of this package.
   */
  name: 'nspr' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mozilla.org/nspr' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: mozilla.org/nspr' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mozilla.org/nspr' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +mozilla.org/nspr -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mozilla.org/nspr' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mozilla.org/nspr/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MozillaorgnsprPackage = typeof mozillaorgnsprPackage
