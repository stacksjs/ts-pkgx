/**
 * **libusb-config** - Library for USB device access
 *
 * @domain `libusb.info/compat`
 * @programs `libusb-config`
 * @version `0.1.8` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) libusb-config`
 * @name `libusb-compat`
 * @aliases `libusb-config`, `compat`
 * @dependencies `libusb.info^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libusbconfig
 * // Or access via domain
 * const samePkg = pantry.libusbinfocompat
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libusb-compat"
 * console.log(pkg.description) // "Library for USB device access"
 * console.log(pkg.programs)    // ["libusb-config"]
 * console.log(pkg.versions[0]) // "0.1.8" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libusb-info/compat.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libusbconfigPackage = {
  /**
   * The display name of this package.
   */
  name: 'libusb-compat' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libusb.info/compat' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Library for USB device access' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libusb.info/compat/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) libusb-config' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'libusb-config',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libusb.info^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.1.8',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libusb-config',
    'compat',
  ] as const,
  fullPath: 'libusb.info/compat' as const,
}

export type LibusbconfigPackage = typeof libusbconfigPackage
