/**
 * **github.com/lu-zero/cargo-c** - pkgx package
 *
 * @domain `github.com/lu/zero/cargo-c`
 *
 * @install `pkgx github.com/lu-zero/cargo-c`
 * @aliases `github.com/lu-zero/cargo-c`, `lu-zero/cargo-c`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomluzerocargoc
 * // Or access via domain
 * const samePkg = pantry.githubcomluzerocargoc
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "lu-zero"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/lu/zero/cargo-c.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomluzerocargocPackage = {
  /**
   * The display name of this package.
   */
  name: 'lu-zero' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/lu/zero/cargo-c' as const,
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
  installCommand: 'pkgx github.com/lu-zero/cargo-c' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/lu-zero/cargo-c',
    'lu-zero/cargo-c',
  ] as const,
  fullPath: 'github.com/lu-zero/cargo-c' as const,
}

export type GithubcomluzerocargocPackage = typeof githubcomluzerocargocPackage
