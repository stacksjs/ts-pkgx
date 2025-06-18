/**
 * **applesimutils** - A collection of command-line utils for Apple simulators.
 *
 * @domain `wix.com/applesimutils`
 * @programs `applesimutils`
 * @version `0.9.12` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) applesimutils`
 * @name `applesimutils`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.applesimutils
 * // Or access via domain
 * const samePkg = pantry.wixcomapplesimutils
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "applesimutils"
 * console.log(pkg.description) // "A collection of command-line utils for Apple si..."
 * console.log(pkg.programs)    // ["applesimutils"]
 * console.log(pkg.versions[0]) // "0.9.12" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wix-com/applesimutils.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const applesimutilsPackage = {
  /**
   * The display name of this package.
   */
  name: 'applesimutils' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wix.com/applesimutils' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A collection of command-line utils for Apple simulators.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/wix.com/applesimutils/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) applesimutils' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'applesimutils',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.9.12',
    '0.9.10',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'wix.com/applesimutils' as const,
}

export type ApplesimutilsPackage = typeof applesimutilsPackage
