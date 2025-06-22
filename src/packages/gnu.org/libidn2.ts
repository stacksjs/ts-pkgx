/**
 * **idn2** - International domain name library (IDNA2008, Punycode and TR46)
 *
 * @domain `gnu.org/libidn2`
 * @programs `idn2`
 * @version `2.3.8` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install idn2`
 * @name `idn2`
 * @dependencies `gnu.org/gettext`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.idn2
 * // Or access via domain
 * const samePkg = pantry.gnuorglibidn2
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "idn2"
 * console.log(pkg.description) // "International domain name library (IDNA2008, Pu..."
 * console.log(pkg.programs)    // ["idn2"]
 * console.log(pkg.versions[0]) // "2.3.8" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/libidn2.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const idn2Package = {
  /**
   * The display name of this package.
   */
  name: 'idn2' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/libidn2' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'International domain name library (IDNA2008, Punycode and TR46)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/libidn2/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install idn2' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'idn2',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gettext',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.3.8',
    '2.3.7',
    '2.3.6',
    '2.3.5',
    '2.3.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) idn2 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install idn2' as const,
}

export type Idn2Package = typeof idn2Package
