/**
 * **fribidi** - Implementation of the Unicode BiDi algorithm
 *
 * @domain `gnu.org/fribidi`
 * @programs `fribidi`
 * @version `1.0.16` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install fribidi`
 * @name `fribidi`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.fribidi
 * // Or access via domain
 * const samePkg = pantry.gnuorgfribidi
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "fribidi"
 * console.log(pkg.description) // "Implementation of the Unicode BiDi algorithm"
 * console.log(pkg.programs)    // ["fribidi"]
 * console.log(pkg.versions[0]) // "1.0.16" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/fribidi.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fribidiPackage = {
  /**
   * The display name of this package.
   */
  name: 'fribidi' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/fribidi' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Implementation of the Unicode BiDi algorithm' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/fribidi/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install fribidi' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'fribidi',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.0.16',
    '1.0.15',
    '1.0.14',
    '1.0.13',
    '1.0.12',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) fribidi -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install fribidi' as const,
}

export type FribidiPackage = typeof fribidiPackage
