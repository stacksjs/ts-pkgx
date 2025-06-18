/**
 * **apktool** - Tool for reverse engineering 3rd party, closed, binary Android apps
 *
 * @domain `apktool.org`
 * @programs `apktool`
 * @version `2.11.1` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install apktool`
 * @aliases `apktool`
 * @dependencies `openjdk.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.apktool
 * // Or access via domain
 * const samePkg = pantry.apktoolorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "apktool.org"
 * console.log(pkg.description) // "Tool for reverse engineering 3rd party, closed,..."
 * console.log(pkg.programs)    // ["apktool"]
 * console.log(pkg.versions[0]) // "2.11.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/apktool-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const apktoolPackage = {
  /**
   * The display name of this package.
   */
  name: 'apktool.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'apktool.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Tool for reverse engineering 3rd party, closed, binary Android apps' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/apktool.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install apktool' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'apktool',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openjdk.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.11.1',
    '2.11.0',
    '2.10.0',
    '2.9.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'apktool',
  ] as const,
}

export type ApktoolPackage = typeof apktoolPackage
