/**
 * **plistutil** - A library to handle Apple Property List format in binary or XML
 *
 * @domain `libimobiledevice.org/libplist`
 * @programs `plistutil`
 * @version `2.7.0` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install plistutil`
 * @aliases `plistutil`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.plistutil
 * // Or access via domain
 * const samePkg = pantry.libimobiledeviceorglibplist
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libplist"
 * console.log(pkg.description) // "A library to handle Apple Property List format ..."
 * console.log(pkg.programs)    // ["plistutil"]
 * console.log(pkg.versions[0]) // "2.7.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libimobiledevice-org/libplist.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const plistutilPackage = {
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
  description: 'A library to handle Apple Property List format in binary or XML' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libimobiledevice.org/libplist/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install plistutil' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'plistutil',
  ] as const,
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
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'plistutil',
  ] as const,
}

export type PlistutilPackage = typeof plistutilPackage
