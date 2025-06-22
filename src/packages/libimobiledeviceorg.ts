/**
 * **libimobiledevice.org** - Package from pantry: libimobiledevice.org
 *
 * @domain `libimobiledevice.org`
 *
 * @install `launchpad install libimobiledevice.org`
 * @dependencies `libimobiledevice.org/libplist^2.4`, `gnu.org/libtasn1^4.19`, `libimobiledevice.org/libusbmuxd^2`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libimobiledeviceorg
 * console.log(pkg.name)        // "libimobiledevice.org"
 * console.log(pkg.description) // "Package from pantry: libimobiledevice.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libimobiledevice-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libimobiledeviceorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libimobiledevice.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libimobiledevice.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: libimobiledevice.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install libimobiledevice.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +libimobiledevice.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install libimobiledevice.org' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libimobiledevice.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LibimobiledeviceorgPackage = typeof libimobiledeviceorgPackage
