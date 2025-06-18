/**
 * **github.com/alt-art/commit** - pkgx package
 *
 * @domain `github.com/alt/art/commit`
 *
 * @install `pkgx github.com/alt-art/commit`
 * @aliases `github.com/alt-art/commit`, `alt-art/commit`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomaltartcommit
 * // Or access via domain
 * const samePkg = pantry.githubcomaltartcommit
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "alt-art"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/alt/art/commit.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomaltartcommitPackage = {
  /**
   * The display name of this package.
   */
  name: 'alt-art' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/alt/art/commit' as const,
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
  installCommand: 'pkgx github.com/alt-art/commit' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/alt-art/commit',
    'alt-art/commit',
  ] as const,
  fullPath: 'github.com/alt-art/commit' as const,
}

export type GithubcomaltartcommitPackage = typeof githubcomaltartcommitPackage
