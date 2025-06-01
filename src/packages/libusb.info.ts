/**
 * **libusb.info** - Crafters of fine Open Source products
 *
 * @domain `libusb.info`
 *
 * @install `pkgx libusb.info`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libusbinfo
 * console.log(pkg.name)        // "libusb.info"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
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
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/libusb.info/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libusb.info' as const,
  fullPath: 'libusb.info' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx libusb.info' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LibusbinfoPackage = typeof libusbinfoPackage
