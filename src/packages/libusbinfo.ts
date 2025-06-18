/**
 * **libusb.info** - Package from pantry: libusb.info
 *
 * @domain `libusb.info`
 *
 * @install `launchpad install libusb.info`
 * @dependencies `gnu.org/autoconf`, `gnu.org/libtool`, `systemd.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libusbinfo
 * console.log(pkg.name)        // "libusb.info"
 * console.log(pkg.description) // "Package from pantry: libusb.info"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libusb-info.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libusbinfoPackage = {
  /**
   * The display name of this package.
   */
  name: 'libusb.info' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libusb.info' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: libusb.info' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install libusb.info' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/autoconf',
    'gnu.org/libtool',
    'systemd.io',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libusb.info/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LibusbinfoPackage = typeof libusbinfoPackage
