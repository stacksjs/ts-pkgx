/**
 * **nss** - Package from pantry: mozilla.org/nss
 *
 * @domain `mozilla.org/nss`
 *
 * @install `launchpad install mozilla.org/nss`
 * @dependencies `mozilla.org/nspr`, `sqlite.org`, `zlib.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mozillaorgnss
 * console.log(pkg.name)        // "nss"
 * console.log(pkg.description) // "Package from pantry: mozilla.org/nss"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mozilla-org/nss.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mozillaorgnssPackage = {
  /**
   * The display name of this package.
   */
  name: 'nss' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mozilla.org/nss' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: mozilla.org/nss' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mozilla.org/nss' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +mozilla.org/nss -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mozilla.org/nss' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'mozilla.org/nspr',
    'sqlite.org',
    'zlib.net',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mozilla.org/nss/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MozillaorgnssPackage = typeof mozillaorgnssPackage
