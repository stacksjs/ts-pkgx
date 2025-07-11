/**
 * **libcerf** - pkgx package
 *
 * @domain `jugit.fz-juelich.de/mlz/libcerf`
 * @version `2.5.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install libcerf`
 * @name `libcerf`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.libcerf
 * // Or access via domain
 * const samePkg = pantry.jugitfzjuelichdemlzlibcerf
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libcerf"
 * console.log(pkg.versions[0]) // "2.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jugit-fz-juelich-de/mlz/libcerf.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libcerfPackage = {
  /**
   * The display name of this package.
   */
  name: 'libcerf' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jugit.fz-juelich.de/mlz/libcerf' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jugit.fz-juelich.de/mlz/libcerf/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install libcerf' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.5.0',
    '2.4.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +jugit.fz-juelich.de/mlz/libcerf -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install libcerf' as const,
}

export type LibcerfPackage = typeof libcerfPackage
