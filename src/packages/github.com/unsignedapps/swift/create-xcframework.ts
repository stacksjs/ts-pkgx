/**
 * **github.com/unsignedapps/swift-create-xcframework** - pkgx package
 *
 * @domain `github.com/unsignedapps/swift/create-xcframework`
 *
 * @install `pkgx github.com/unsignedapps/swift-create-xcframework`
 * @aliases `github.com/unsignedapps/swift-create-xcframework`, `unsignedapps/swift-create-xcframework`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomunsignedappsswiftcreatexcframework
 * // Or access via domain
 * const samePkg = pantry.githubcomunsignedappsswiftcreatexcframework
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "unsignedapps"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/unsignedapps/swift/create-xcframework.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomunsignedappsswiftcreatexcframeworkPackage = {
  /**
   * The display name of this package.
   */
  name: 'unsignedapps' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/unsignedapps/swift/create-xcframework' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/unsignedapps/swift-create-xcframework' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/unsignedapps/swift-create-xcframework',
    'unsignedapps/swift-create-xcframework',
  ] as const,
  fullPath: 'github.com/unsignedapps/swift-create-xcframework' as const,
}

export type GithubcomunsignedappsswiftcreatexcframeworkPackage = typeof githubcomunsignedappsswiftcreatexcframeworkPackage
