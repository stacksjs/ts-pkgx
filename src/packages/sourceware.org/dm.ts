/**
 * **device-mapper** - pkgx package
 *
 * @domain `sourceware.org/dm`
 * @version `2.3.34` (12 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install device-mapper`
 * @name `device-mapper`
 * @dependencies `pagure.io/libaio^0.3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.devicemapper
 * // Or access via domain
 * const samePkg = pantry.sourcewareorgdm
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "device-mapper"
 * console.log(pkg.versions[0]) // "2.3.34" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sourceware-org/dm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const devicemapperPackage = {
  /**
   * The display name of this package.
   */
  name: 'device-mapper' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sourceware.org/dm' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sourceware.org/dm/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install device-mapper' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pagure.io/libaio^0.3',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.3.34',
    '2.3.33',
    '2.3.32',
    '2.3.31',
    '2.3.30',
    '2.3.29',
    '2.3.28',
    '2.3.27',
    '2.3.26',
    '2.3.25',
    '2.3.24',
    '2.3.22',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +sourceware.org/dm -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install device-mapper' as const,
}

export type DevicemapperPackage = typeof devicemapperPackage
