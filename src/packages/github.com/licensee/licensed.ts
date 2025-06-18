/**
 * **licensed** - A Ruby gem to cache and verify the licenses of dependencies
 *
 * @domain `github.com/licensee/licensed`
 * @programs `licensed`
 * @version `5.0.4` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install licensed`
 * @name `licensed`
 * @dependencies `ruby-lang.org^3.1`, `rubygems.org`, `gnome.org/libxml2~2.13.8 # for nokogiri`, ... (+3 more)
 * @companions `linux`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.licensed
 * // Or access via domain
 * const samePkg = pantry.githubcomlicenseelicensed
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "licensed"
 * console.log(pkg.description) // "A Ruby gem to cache and verify the licenses of ..."
 * console.log(pkg.programs)    // ["licensed"]
 * console.log(pkg.versions[0]) // "5.0.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/licensee/licensed.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const licensedPackage = {
  /**
   * The display name of this package.
   */
  name: 'licensed' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/licensee/licensed' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A Ruby gem to cache and verify the licenses of dependencies' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/licensee/licensed/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/licensee/licensed' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install licensed' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'licensed',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'linux',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'ruby-lang.org^3.1',
    'rubygems.org',
    'gnome.org/libxml2~2.13.8 # for nokogiri',
    'gnome.org/libxslt~1.1.43 # for nokogiri',
    'pcre.org^8 # for nokogiri',
    'cmake.org^4 # for Rugged',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.0.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type LicensedPackage = typeof licensedPackage
