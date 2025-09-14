/**
 * **utf8cpp** - UTF-8 with C++ in a Portable Way
 *
 * @domain `github.com/nemtrif/utfcpp`
 * @version `4.0.7` (11 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install utf8cpp`
 * @name `utf8cpp`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.utf8cpp
 * // Or access via domain
 * const samePkg = pantry.githubcomnemtrifutfcpp
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "utf8cpp"
 * console.log(pkg.description) // "UTF-8 with C++ in a Portable Way"
 * console.log(pkg.versions[0]) // "4.0.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/nemtrif/utfcpp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const utf8cppPackage = {
  /**
   * The display name of this package.
   */
  name: 'utf8cpp' as const,
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install utf8cpp' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.0.7',
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
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/nemtrif/utfcpp -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install utf8cpp' as const,
}

export type Utf8cppPackage = typeof utf8cppPackage
