/**
 * **xcodeproj** - Create and modify Xcode projects from Ruby.
 *
 * @domain `cocoapods.org/xcodeproj`
 * @programs `xcodeproj`
 * @version `1.27.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) xcodeproj`
 * @name `xcodeproj`
 * @dependencies `ruby-lang.org~3.2`, `rubygems.org^3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.xcodeproj
 * // Or access via domain
 * const samePkg = pantry.cocoapodsorgxcodeproj
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xcodeproj"
 * console.log(pkg.description) // "Create and modify Xcode projects from Ruby."
 * console.log(pkg.programs)    // ["xcodeproj"]
 * console.log(pkg.versions[0]) // "1.27.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cocoapods-org/xcodeproj.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xcodeprojPackage = {
  /**
   * The display name of this package.
   */
  name: 'xcodeproj' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cocoapods.org/xcodeproj' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Create and modify Xcode projects from Ruby.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cocoapods.org/xcodeproj/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) xcodeproj' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'xcodeproj',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'ruby-lang.org~3.2',
    'rubygems.org^3',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.27.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'cocoapods.org/xcodeproj' as const,
}

export type XcodeprojPackage = typeof xcodeprojPackage
