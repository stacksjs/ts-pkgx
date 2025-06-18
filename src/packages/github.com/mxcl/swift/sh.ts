/**
 * **github.com/mxcl/swift-sh** - pkgx package
 *
 * @domain `github.com/mxcl/swift/sh`
 *
 * @install `pkgx github.com/mxcl/swift-sh`
 * @aliases `github.com/mxcl/swift-sh`, `mxcl/swift-sh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcommxclswiftsh
 * // Or access via domain
 * const samePkg = pantry.githubcommxclswiftsh
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mxcl"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mxcl/swift/sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcommxclswiftshPackage = {
  /**
   * The display name of this package.
   */
  name: 'mxcl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mxcl/swift/sh' as const,
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
  installCommand: 'pkgx github.com/mxcl/swift-sh' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/mxcl/swift-sh',
    'mxcl/swift-sh',
  ] as const,
  fullPath: 'github.com/mxcl/swift-sh' as const,
}

export type GithubcommxclswiftshPackage = typeof githubcommxclswiftshPackage
