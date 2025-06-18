/**
 * **swift-sh** - Easily script with third-party Swift dependencies.
 *
 * @domain `github.com/mxcl/swift-sh`
 * @programs `swift-sh`
 * @version `2.5.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install swift-sh`
 * @name `swift-sh`
 * @aliases `mxcl/swift-sh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.swiftsh
 * // Or access via domain
 * const samePkg = pantry.githubcommxclswiftsh
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "swift-sh"
 * console.log(pkg.description) // "Easily script with third-party Swift dependencies."
 * console.log(pkg.programs)    // ["swift-sh"]
 * console.log(pkg.versions[0]) // "2.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mxcl/swift-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const swiftshPackage = {
  /**
   * The display name of this package.
   */
  name: 'swift-sh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mxcl/swift-sh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Easily script with third-party Swift dependencies.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mxcl/swift-sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install swift-sh' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'swift-sh',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.5.0',
    '2.4.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'mxcl/swift-sh',
  ] as const,
  fullPath: 'github.com/mxcl/swift-sh' as const,
}

export type SwiftshPackage = typeof swiftshPackage
