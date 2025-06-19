/**
 * **ed** - pkgx package
 *
 * @domain `gnu.org/ed`
 * @programs `ed`
 * @version `1.21.1` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install ed`
 * @name `ed`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ed
 * // Or access via domain
 * const samePkg = pantry.gnuorged
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ed"
 * console.log(pkg.programs)    // ["ed"]
 * console.log(pkg.versions[0]) // "1.21.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/ed.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const edPackage = {
  /**
   * The display name of this package.
   */
  name: 'ed' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/ed' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/ed/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ed' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ed',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.21.1',
    '1.20.2',
    '1.20.1',
    '1.14.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type EdPackage = typeof edPackage
