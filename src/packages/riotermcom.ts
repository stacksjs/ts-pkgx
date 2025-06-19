/**
 * **rio** - A hardware-accelerated GPU terminal emulator focusing to run in desktops and browsers.
 *
 * @domain `rioterm.com`
 * @programs `rio`
 * @version `0.2.19` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install rio`
 * @aliases `rio`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.rio
 * // Or access via domain
 * const samePkg = pantry.riotermcom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rioterm.com"
 * console.log(pkg.description) // "A hardware-accelerated GPU terminal emulator fo..."
 * console.log(pkg.programs)    // ["rio"]
 * console.log(pkg.versions[0]) // "0.2.19" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rioterm-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rioPackage = {
  /**
   * The display name of this package.
   */
  name: 'rioterm.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rioterm.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A hardware-accelerated GPU terminal emulator focusing to run in desktops and browsers.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rioterm.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install rio' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'rio',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.2.19',
    '0.2.18',
    '0.2.17',
    '0.2.16',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'rio',
  ] as const,
}

export type RioPackage = typeof rioPackage
