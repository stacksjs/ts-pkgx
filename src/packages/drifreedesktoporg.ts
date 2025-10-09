/**
 * **libdrm** - pkgx package
 *
 * @domain `dri.freedesktop.org`
 * @version `2.4.126` (12 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install libdrm`
 * @name `libdrm`
 * @dependencies `x.org/pciaccess`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.libdrm
 * // Or access via domain
 * const samePkg = pantry.drifreedesktoporg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libdrm"
 * console.log(pkg.versions[0]) // "2.4.126" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dri-freedesktop-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libdrmPackage = {
  /**
   * The display name of this package.
   */
  name: 'libdrm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dri.freedesktop.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dri.freedesktop.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install libdrm' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/pciaccess',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.4.126',
    '2.4.125',
    '2.4.124',
    '2.4.123',
    '2.4.122',
    '2.4.121',
    '2.4.120',
    '2.4.119',
    '2.4.118',
    '2.4.117',
    '2.4.116',
    '2.4.100',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +dri.freedesktop.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install libdrm' as const,
}

export type LibdrmPackage = typeof libdrmPackage
