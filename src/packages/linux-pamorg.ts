/**
 * **linux-pam.org** - Package from pantry: linux-pam.org
 *
 * @domain `linux-pam.org`
 *
 * @install `launchpad install linux-pam.org`
 * @dependencies `github.com/thkukuk/libnsl`, `sourceforge.net/libtirpc`, `github.com/besser82/libxcrypt`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.linuxpamorg
 * console.log(pkg.name)        // "linux-pam.org"
 * console.log(pkg.description) // "Package from pantry: linux-pam.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/linux-pam-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const linuxpamorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'linux-pam.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'linux-pam.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: linux-pam.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install linux-pam.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +linux-pam.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install linux-pam.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'github.com/thkukuk/libnsl',
    'sourceforge.net/libtirpc',
    'github.com/besser82/libxcrypt',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/linux-pam.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LinuxpamorgPackage = typeof linuxpamorgPackage
