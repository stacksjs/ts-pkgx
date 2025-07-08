/**
 * **ntp.org** - Package from pantry: ntp.org
 *
 * @domain `ntp.org`
 *
 * @install `launchpad install ntp.org`
 * @dependencies `openssl.org^3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ntporg
 * console.log(pkg.name)        // "ntp.org"
 * console.log(pkg.description) // "Package from pantry: ntp.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ntp-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ntporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'ntp.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ntp.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: ntp.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ntp.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +ntp.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install ntp.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ntp.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type NtporgPackage = typeof ntporgPackage
