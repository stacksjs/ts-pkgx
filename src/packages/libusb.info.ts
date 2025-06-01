/**
 * **+libusb.info -- $SHELL -i** - A cross-platform library to access USB devices
 *
 * @domain `libusb.info`
 * @version `1.0.28` (3 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/libusb-info.md
 *
 * @install `sh <(curl https://pkgx.sh) +libusb.info -- $SHELL -i`
 * @aliases `+libusb.info -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libusbinfoSHELLi
 * // Or access via domain
 * const samePkg = pantry.libusbinfo
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libusb.info"
 * console.log(pkg.description) // "A cross-platform library to access USB devices"
 * console.log(pkg.versions[0]) // "1.0.28" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libusb-info.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libusbinfoSHELLiPackage = {
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
  installCommand: 'sh <(curl https://pkgx.sh) +libusb.info -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.0.28',
    '1.0.27',
    '1.0.26',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    '+libusb.info -- $SHELL -i',
  ] as const,
  fullPath: 'libusb.info' as const,
}

export type LibusbinfoSHELLiPackage = typeof libusbinfoSHELLiPackage
