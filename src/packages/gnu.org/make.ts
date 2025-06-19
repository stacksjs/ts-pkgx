/**
 * **make** - pkgx package
 *
 * @domain `gnu.org/make`
 * @programs `make`
 * @version `4.3.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install make`
 * @name `make`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.make
 * // Or access via domain
 * const samePkg = pantry.gnuorgmake
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "make"
 * console.log(pkg.programs)    // ["make"]
 * console.log(pkg.versions[0]) // "4.3.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/make.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const makePackage = {
  /**
   * The display name of this package.
   */
  name: 'make' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/make' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/make/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install make' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'make',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.3.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type MakePackage = typeof makePackage
