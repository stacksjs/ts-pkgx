/**
 * **libusbmuxd** - A client library to multiplex connections from and to iOS devices
 *
 * @domain `libimobiledevice.org/libusbmuxd`
 * @programs `iproxy`, `inetcat`
 * @version `2.1.1` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +libimobiledevice.org/libusbmuxd -- $SHELL -i`
 * @aliases `libusbmuxd`
 * @dependencies `libimobiledevice.org/libplist^2.4`, `libimobiledevice.org/libimobiledevice-glue^1.2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libusbmuxd
 * // Or access via domain
 * const samePkg = pantry.libimobiledeviceorglibusbmuxd
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libimobiledevice.org/libusbmuxd"
 * console.log(pkg.description) // "A client library to multiplex connections from ..."
 * console.log(pkg.programs)    // ["iproxy", "inetcat"]
 * console.log(pkg.versions[0]) // "2.1.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libimobiledevice-org/libusbmuxd.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libusbmuxdPackage = {
  /**
   * The display name of this package.
   */
  name: 'libimobiledevice.org/libusbmuxd' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libimobiledevice.org/libusbmuxd' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A client library to multiplex connections from and to iOS devices' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libimobiledevice.org/libusbmuxd/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +libimobiledevice.org/libusbmuxd -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'iproxy',
    'inetcat',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libimobiledevice.org/libplist^2.4',
    'libimobiledevice.org/libimobiledevice-glue^1.2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.1.1',
    '2.1.0',
    '2.0.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libusbmuxd',
  ] as const,
  fullPath: 'libimobiledevice.org/libusbmuxd' as const,
}

export type LibusbmuxdPackage = typeof libusbmuxdPackage
