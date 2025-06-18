/**
 * **swiftenv** - Swift Version Manager
 *
 * @domain `github.com/kylef/swiftenv`
 * @programs `swiftenv`
 * @version `1.4.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install swiftenv`
 * @name `swiftenv`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.swiftenv
 * // Or access via domain
 * const samePkg = pantry.githubcomkylefswiftenv
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "swiftenv"
 * console.log(pkg.description) // "Swift Version Manager"
 * console.log(pkg.programs)    // ["swiftenv"]
 * console.log(pkg.versions[0]) // "1.4.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/kylef/swiftenv.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const swiftenvPackage = {
  /**
   * The display name of this package.
   */
  name: 'swiftenv' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/kylef/swiftenv' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Swift Version Manager' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/kylef/swiftenv/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install swiftenv' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'swiftenv',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.4.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type SwiftenvPackage = typeof swiftenvPackage
