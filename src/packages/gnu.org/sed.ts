/**
 * **sed** - pkgx package
 *
 * @domain `gnu.org/sed`
 * @programs `sed`
 * @version `4.9.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install sed`
 * @name `sed`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.sed
 * // Or access via domain
 * const samePkg = pantry.gnuorgsed
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sed"
 * console.log(pkg.programs)    // ["sed"]
 * console.log(pkg.versions[0]) // "4.9.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/sed.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sedPackage = {
  /**
   * The display name of this package.
   */
  name: 'sed' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/sed' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A stream editor for filtering and transforming text' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/sed/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sed' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'sed',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.9.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) sed -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install sed' as const,
}

export type SedPackage = typeof sedPackage
