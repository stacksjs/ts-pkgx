/**
 * **swift-create-xcframework** - A simple Command Line Tool to create XCFrameworks by wrapping xcodebuild.
 *
 * @domain `github.com/unsignedapps/swift-create-xcframework`
 * @programs `swift-create-xcframework`
 * @version `2.3.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install swift-create-xcframework`
 * @name `swift-create-xcframework`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.swiftcreatexcframework
 * // Or access via domain
 * const samePkg = pantry.githubcomunsignedappsswiftcreatexcframework
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "swift-create-xcframework"
 * console.log(pkg.description) // "A simple Command Line Tool to create XCFramewor..."
 * console.log(pkg.programs)    // ["swift-create-xcframework"]
 * console.log(pkg.versions[0]) // "2.3.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/unsignedapps/swift-create-xcframework.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const swiftcreatexcframeworkPackage = {
  /**
   * The display name of this package.
   */
  name: 'swift-create-xcframework' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/unsignedapps/swift-create-xcframework' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A simple Command Line Tool to create XCFrameworks by wrapping xcodebuild.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/unsignedapps/swift-create-xcframework/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install swift-create-xcframework' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'swift-create-xcframework',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.3.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) swift-create-xcframework -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install swift-create-xcframework' as const,
}

export type SwiftcreatexcframeworkPackage = typeof swiftcreatexcframeworkPackage
