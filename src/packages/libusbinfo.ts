/**
 * **libusb.info** - A cross-platform library to access USB devices
 *
 * @domain `libusb.info`
 * @version `1.0.29` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +libusb.info -- $SHELL -i`
 * @dependencies `gnu.org/autoconf`, `gnu.org/libtool`, `systemd.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libusbinfo
 * console.log(pkg.name)        // "libusb.info"
 * console.log(pkg.description) // "A cross-platform library to access USB devices"
 * console.log(pkg.versions[0]) // "1.0.29" (latest)
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
  description: 'A cross-platform library to access USB devices' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libusb.info/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +libusb.info -- $SHELL -i' as const,
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
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.0.29',
    '1.0.28',
    '1.0.27',
    '1.0.26',
  ] as const,
  aliases: [] as const,
}

export type LibusbinfoPackage = typeof libusbinfoPackage
