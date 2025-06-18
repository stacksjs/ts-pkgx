/**
 * **SwiftGen** - pkgx package
 *
 * @domain `github.com/SwiftGen`
 *
 * @install `pkgx github.com/SwiftGen`
 * @name `SwiftGen`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.SwiftGen
 * // Or access via domain
 * const samePkg = pantry.githubcomswiftgen
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "SwiftGen"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/SwiftGen.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const swiftGenPackage = {
  /**
   * The display name of this package.
   */
  name: 'SwiftGen' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/SwiftGen' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/SwiftGen' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/SwiftGen' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/SwiftGen' as const,
}

export type SwiftGenPackage = typeof swiftGenPackage
