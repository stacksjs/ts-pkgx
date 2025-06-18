/**
 * **doxygen** - Generate documentation for several programming languages
 *
 * @domain `doxygen.nl`
 * @programs `doxygen`
 * @version `1.14.0` (10 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install doxygen`
 * @aliases `doxygen`
 * @dependencies `gnu.org/bison^3`, `cmake.org^3`, `github.com/westes/flex@2`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.doxygen
 * // Or access via domain
 * const samePkg = pantry.doxygennl
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "doxygen.nl"
 * console.log(pkg.description) // "Generate documentation for several programming ..."
 * console.log(pkg.programs)    // ["doxygen"]
 * console.log(pkg.versions[0]) // "1.14.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/doxygen-nl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const doxygenPackage = {
  /**
   * The display name of this package.
   */
  name: 'doxygen.nl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'doxygen.nl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Generate documentation for several programming languages' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/doxygen.nl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install doxygen' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'doxygen',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/bison^3',
    'cmake.org^3',
    'github.com/westes/flex@2',
    'python.org>=3<3.12',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.14.0',
    '1.13.2',
    '1.13.1',
    '1.13.0',
    '1.12.0',
    '1.11.0',
    '1.10.0',
    '1.9.8',
    '1.9.7',
    '1.9.6',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'doxygen',
  ] as const,
}

export type DoxygenPackage = typeof doxygenPackage
