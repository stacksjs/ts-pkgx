/**
 * **libusbmuxd** - Package from pantry: libimobiledevice.org/libusbmuxd
 *
 * @domain `libimobiledevice.org/libusbmuxd`
 *
 * @install `launchpad install libimobiledevice.org/libusbmuxd`
 * @dependencies `libimobiledevice.org/libplist^2.4`, `libimobiledevice.org/libimobiledevice-glue^1.2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libimobiledeviceorglibusbmuxd
 * console.log(pkg.name)        // "libusbmuxd"
 * console.log(pkg.description) // "Package from pantry: libimobiledevice.org/libus..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libimobiledevice-org/libusbmuxd.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libimobiledeviceorglibusbmuxdPackage = {
  /**
   * The display name of this package.
   */
  name: 'libusbmuxd' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libimobiledevice.org/libusbmuxd' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: libimobiledevice.org/libusbmuxd' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install libimobiledevice.org/libusbmuxd' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +libimobiledevice.org/libusbmuxd -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install libimobiledevice.org/libusbmuxd' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libimobiledevice.org/libplist^2.4',
    'libimobiledevice.org/libimobiledevice-glue^1.2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libimobiledevice.org/libusbmuxd/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LibimobiledeviceorglibusbmuxdPackage = typeof libimobiledeviceorglibusbmuxdPackage
