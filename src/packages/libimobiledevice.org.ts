/**
 * **idevicedate** - A cross-platform protocol library to communicate with iOS devices
 *
 * @domain `libimobiledevice.org`
 * @programs `idevicedate`
 * @version `1.3.0` (1 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/libimobiledevice-org.md
 *
 * @install `sh <(curl https://pkgx.sh) idevicedate`
 * @aliases `idevicedate`
 * @dependencies `libimobiledevice.org/libplist^2.4`, `gnu.org/libtasn1^4.19`, `libimobiledevice.org/libusbmuxd^2`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.idevicedate
 * // Or access via domain
 * const samePkg = pantry.libimobiledeviceorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "idevicedate"
 * console.log(pkg.description) // "A cross-platform protocol library to communicat..."
 * console.log(pkg.programs)    // ["idevicedate"]
 * console.log(pkg.versions[0]) // "1.3.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libimobiledevice-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const idevicedatePackage = {
  /**
   * The display name of this package.
   */
  name: 'idevicedate' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libimobiledevice.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A cross-platform protocol library to communicate with iOS devices' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libimobiledevice.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) idevicedate' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'idevicedate',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libimobiledevice.org/libplist^2.4',
    'gnu.org/libtasn1^4.19',
    'libimobiledevice.org/libusbmuxd^2',
    'openssl.org^1.1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.0',
  ] as const,
  fullPath: 'libimobiledevice.org' as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'idevicedate',
  ] as const,
}

export type IdevicedatePackage = typeof idevicedatePackage
