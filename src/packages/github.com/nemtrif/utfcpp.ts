/**
 * **utf8cpp** - UTF-8 with C++ in a Portable Way
 *
 * @domain `github.com/nemtrif/utfcpp`
 * @version `4.0.6` (10 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/nemtrif/utfcpp -- $SHELL -i`
 * @aliases `utf8cpp`
 * @dependencies `cmake.org`, `gnu.org/gcc@13`, `cmake.org`, ... (+3 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.utf8cpp
 * // Or access via domain
 * const samePkg = pantry.githubcomnemtrifutfcpp
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "utfcpp"
 * console.log(pkg.description) // "UTF-8 with C++ in a Portable Way"
 * console.log(pkg.versions[0]) // "4.0.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/nemtrif/utfcpp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const utf8cppPackage = {
  /**
   * The display name of this package.
   */
  name: 'utfcpp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/nemtrif/utfcpp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'UTF-8 with C++ in a Portable Way' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/nemtrif/utfcpp/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +github.com/nemtrif/utfcpp -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'cmake.org',
    'gnu.org/gcc@13',
    'cmake.org',
    'gnu.org/sed',
    'gnu.org/gcc@13',
    'gnu.org/make',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.0.6',
    '4.0.5',
    '4.0.4',
    '4.0.3',
    '4.0.2',
    '4.0.1',
    '4.0.0',
    '3.2.5',
    '3.2.4',
    '3.2.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'utf8cpp',
  ] as const,
}

export type Utf8cppPackage = typeof utf8cppPackage
