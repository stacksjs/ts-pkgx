/**
 * **trurl** - a command line tool for URL parsing and manipulation.
 *
 * @domain `curl.se/trurl`
 * @programs `trurl`
 * @version `0.16.1` (14 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install trurl`
 * @name `trurl`
 * @dependencies `curl.se^7,^8`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.trurl
 * // Or access via domain
 * const samePkg = pantry.curlsetrurl
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "trurl"
 * console.log(pkg.description) // "a command line tool for URL parsing and manipul..."
 * console.log(pkg.programs)    // ["trurl"]
 * console.log(pkg.versions[0]) // "0.16.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/curl-se/trurl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const trurlPackage = {
  /**
   * The display name of this package.
   */
  name: 'trurl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'curl.se/trurl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'a command line tool for URL parsing and manipulation.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/curl.se/trurl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install trurl' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'trurl',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se^7,^8',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.16.1',
    '0.16.0',
    '0.15.1',
    '0.15.0',
    '0.14.0',
    '0.13.0',
    '0.12.0',
    '0.11.0',
    '0.10.0',
    '0.9.0',
    '0.8.0',
    '0.7.0',
    '0.6.0',
    '0.4.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type TrurlPackage = typeof trurlPackage
