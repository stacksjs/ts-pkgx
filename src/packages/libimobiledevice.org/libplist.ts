/**
 * **libplist** - Package from pantry: libimobiledevice.org/libplist
 *
 * @domain `libimobiledevice.org/libplist`
 *
 * @install `launchpad install libimobiledevice.org/libplist`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libimobiledeviceorglibplist
 * console.log(pkg.name)        // "libplist"
 * console.log(pkg.description) // "Package from pantry: libimobiledevice.org/libplist"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libimobiledevice-org/libplist.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libimobiledeviceorglibplistPackage = {
  /**
   * The display name of this package.
   */
  name: 'libplist' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libimobiledevice.org/libplist' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: libimobiledevice.org/libplist' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install libimobiledevice.org/libplist' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +libimobiledevice.org/libplist -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install libimobiledevice.org/libplist' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libimobiledevice.org/libplist/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LibimobiledeviceorglibplistPackage = typeof libimobiledeviceorglibplistPackage
