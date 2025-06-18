/**
 * **xcresultparser** - Parse the binary xcresult bundle from Xcode builds and testruns
 *
 * @domain `github.com/a7ex/xcresultparser`
 * @programs `xcresultparser`
 * @version `1.8.5` (16 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install xcresultparser`
 * @name `xcresultparser`
 * @dependencies `crates.io/semverator`, `curl.se`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.xcresultparser
 * // Or access via domain
 * const samePkg = pantry.githubcoma7exxcresultparser
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xcresultparser"
 * console.log(pkg.description) // "Parse the binary xcresult bundle from Xcode bui..."
 * console.log(pkg.programs)    // ["xcresultparser"]
 * console.log(pkg.versions[0]) // "1.8.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/a7ex/xcresultparser.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xcresultparserPackage = {
  /**
   * The display name of this package.
   */
  name: 'xcresultparser' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/a7ex/xcresultparser' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Parse the binary xcresult bundle from Xcode builds and testruns' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/a7ex/xcresultparser/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/a7ex/xcresultparser' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install xcresultparser' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'xcresultparser',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'crates.io/semverator',
    'curl.se',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.8.5',
    '1.8.4',
    '1.8.3',
    '1.8.2',
    '1.8.1',
    '1.8.0',
    '1.7.2',
    '1.7.1',
    '1.7.0',
    '1.6.5',
    '1.6.4',
    '1.6.3',
    '1.6.2',
    '1.6.1',
    '1.6.0',
    '1.5.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type XcresultparserPackage = typeof xcresultparserPackage
