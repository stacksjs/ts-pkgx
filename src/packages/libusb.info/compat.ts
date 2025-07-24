/**
 * **compat** - Package from pantry: libusb.info/compat
 *
 * @domain `libusb.info/compat`
 *
 * @install `launchpad install libusb.info/compat`
 * @dependencies `libusb.info^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libusbinfocompat
 * console.log(pkg.name)        // "compat"
 * console.log(pkg.description) // "Package from pantry: libusb.info/compat"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libusb-info/compat.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libusbinfocompatPackage = {
  /**
   * The display name of this package.
   */
  name: 'compat' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libusb.info/compat' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: libusb.info/compat' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install libusb.info/compat' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +libusb.info/compat -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install libusb.info/compat' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libusb.info^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libusb.info/compat/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LibusbinfocompatPackage = typeof libusbinfocompatPackage
