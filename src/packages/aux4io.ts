/**
 * **aux4** - elevate your imagination
 *
 * @domain `aux4.io`
 * @programs `aux4`
 * @version `5.0.14` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install aux4`
 * @aliases `aux4`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.aux4
 * // Or access via domain
 * const samePkg = pantry.aux4io
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "aux4.io"
 * console.log(pkg.description) // "elevate your imagination"
 * console.log(pkg.programs)    // ["aux4"]
 * console.log(pkg.versions[0]) // "5.0.14" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/aux4-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const aux4Package = {
  /**
   * The display name of this package.
   */
  name: 'aux4.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'aux4.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'elevate your imagination' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/aux4.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install aux4' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'aux4',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.0.14',
    '5.0.11',
    '5.0.10',
    '5.0.9',
    '5.0.8',
    '5.0.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'aux4',
  ] as const,
}

export type Aux4Package = typeof aux4Package
