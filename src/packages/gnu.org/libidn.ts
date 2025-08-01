/**
 * **idn** - International domain name library
 *
 * @domain `gnu.org/libidn`
 * @programs `idn`
 * @version `1.43.0` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install idn`
 * @name `idn`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.idn
 * // Or access via domain
 * const samePkg = pantry.gnuorglibidn
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "idn"
 * console.log(pkg.description) // "International domain name library"
 * console.log(pkg.programs)    // ["idn"]
 * console.log(pkg.versions[0]) // "1.43.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/libidn.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const idnPackage = {
  /**
   * The display name of this package.
   */
  name: 'idn' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/libidn' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'International domain name library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/libidn/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install idn' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'idn',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.43.0',
    '1.42.0',
    '1.41.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) idn -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install idn' as const,
}

export type IdnPackage = typeof idnPackage
