/**
 * **swiftlint** - A tool to enforce Swift style and conventions.
 *
 * @domain `github.com/realm/SwiftLint`
 * @programs `swiftlint`
 * @version `0.59.1` (17 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) swiftlint`
 * @name `swiftlint`
 * @aliases `realm/SwiftLint`
 * @dependencies `linuxcurl.se@8gnome.org/libxml2@2`, `curl.se@8`, `gnome.org/libxml2@2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.swiftlint
 * // Or access via domain
 * const samePkg = pantry.githubcomrealmswiftlint
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "swiftlint"
 * console.log(pkg.description) // "A tool to enforce Swift style and conventions."
 * console.log(pkg.programs)    // ["swiftlint"]
 * console.log(pkg.versions[0]) // "0.59.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/realm/SwiftLint.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const swiftlintPackage = {
  /**
   * The display name of this package.
   */
  name: 'swiftlint' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/realm/SwiftLint' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A tool to enforce Swift style and conventions.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/realm/SwiftLint/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) swiftlint' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'swiftlint',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'linuxcurl.se@8gnome.org/libxml2@2',
    'curl.se@8',
    'gnome.org/libxml2@2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.59.1',
    '0.59.0',
    '0.58.2',
    '0.58.1',
    '0.58.0',
    '0.57.1',
    '0.57.0',
    '0.56.2',
    '0.56.1',
    '0.56.0',
    '0.55.1',
    '0.55.0',
    '0.54.0',
    '0.53.0',
    '0.52.4',
    '0.52.3',
    '0.52.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'realm/SwiftLint',
  ] as const,
  fullPath: 'github.com/realm/SwiftLint' as const,
}

export type SwiftlintPackage = typeof swiftlintPackage
