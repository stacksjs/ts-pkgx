/**
 * **libimobiledevice.org/libplist** - pkgx package
 *
 * @domain `libimobiledevice.org/libplist`
 * @version `2.7.0` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install libimobiledevice.org/libplist`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libimobiledeviceorglibplist
 * console.log(pkg.name)        // "libimobiledevice.org/libplist"
 * console.log(pkg.versions[0]) // "2.7.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libimobiledevice-org/libplist.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libimobiledeviceorglibplistPackage = {
  /**
   * The display name of this package.
   */
  name: 'libimobiledevice.org/libplist' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libimobiledevice.org/libplist' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libimobiledevice.org/libplist/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install libimobiledevice.org/libplist' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.7.0',
    '2.6.0',
    '2.5.0',
    '2.4.0',
    '2.3.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +libimobiledevice.org/libplist -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install libimobiledevice.org/libplist' as const,
}

export type LibimobiledeviceorglibplistPackage = typeof libimobiledeviceorglibplistPackage
