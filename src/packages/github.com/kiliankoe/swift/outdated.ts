/**
 * **github.com/kiliankoe/swift-outdated** - pkgx package
 *
 * @domain `github.com/kiliankoe/swift/outdated`
 *
 * @install `pkgx github.com/kiliankoe/swift-outdated`
 * @aliases `github.com/kiliankoe/swift-outdated`, `kiliankoe/swift-outdated`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomkiliankoeswiftoutdated
 * // Or access via domain
 * const samePkg = pantry.githubcomkiliankoeswiftoutdated
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "kiliankoe"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/kiliankoe/swift/outdated.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomkiliankoeswiftoutdatedPackage = {
  /**
   * The display name of this package.
   */
  name: 'kiliankoe' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/kiliankoe/swift/outdated' as const,
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
  installCommand: 'pkgx github.com/kiliankoe/swift-outdated' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/kiliankoe/swift-outdated',
    'kiliankoe/swift-outdated',
  ] as const,
  fullPath: 'github.com/kiliankoe/swift-outdated' as const,
}

export type GithubcomkiliankoeswiftoutdatedPackage = typeof githubcomkiliankoeswiftoutdatedPackage
