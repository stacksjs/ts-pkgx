/**
 * **fastlane** - 🚀 The easiest way to automate building and releasing your iOS and Android apps
 *
 * @domain `fastlane.tools`
 * @programs `fastlane`
 * @version `2.227.2` (22 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/fastlane-tools.md
 *
 * @install `sh <(curl https://pkgx.sh) fastlane`
 * @aliases `fastlane`
 * @dependencies `ruby-lang.org~3.2`, `rubygems.org`
 * @companions `cocoapods.org/xcodeproj`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.fastlane
 * // Or access via domain
 * const samePkg = pantry.fastlanetools
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "fastlane"
 * console.log(pkg.description) // "🚀 The easiest way to automate building and rel..."
 * console.log(pkg.programs)    // ["fastlane"]
 * console.log(pkg.versions[0]) // "2.227.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fastlane-tools.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fastlanePackage = {
  /**
   * The display name of this package.
   */
  name: 'fastlane' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fastlane.tools' as const,
  /**
   * Brief description of what this package does.
   */
  description: '🚀 The easiest way to automate building and releasing your iOS and Android apps' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fastlane.tools/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) fastlane' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'fastlane',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'cocoapods.org/xcodeproj',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'ruby-lang.org~3.2',
    'rubygems.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.227.2',
    '2.227.1',
    '2.227.0',
    '2.226.0',
    '2.225.0',
    '2.224.0',
    '2.223.1',
    '2.223.0',
    '2.222.0',
    '2.221.1',
    '2.221.0',
    '2.220.0',
    '2.219.0',
    '2.218.0',
    '2.217.0',
    '2.216.0',
    '2.215.1',
    '2.215.0',
    '2.214.0',
    '2.213.0',
    '2.212.2',
    '2.212.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'fastlane',
  ] as const,
  fullPath: 'fastlane.tools' as const,
}

export type FastlanePackage = typeof fastlanePackage
