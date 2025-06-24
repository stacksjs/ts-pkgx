/**
 * **libsrtp** - Package from pantry: cisco.com/libsrtp
 *
 * @domain `cisco.com/libsrtp`
 *
 * @install `launchpad install cisco.com/libsrtp`
 * @dependencies `openssl.org~1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ciscocomlibsrtp
 * console.log(pkg.name)        // "libsrtp"
 * console.log(pkg.description) // "Package from pantry: cisco.com/libsrtp"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cisco-com/libsrtp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ciscocomlibsrtpPackage = {
  /**
   * The display name of this package.
   */
  name: 'libsrtp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cisco.com/libsrtp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: cisco.com/libsrtp' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cisco.com/libsrtp' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +cisco.com/libsrtp -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cisco.com/libsrtp' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org~1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cisco.com/libsrtp/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CiscocomlibsrtpPackage = typeof ciscocomlibsrtpPackage
