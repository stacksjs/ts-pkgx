/**
 * **github.com/x-motemen/ghq** - pkgx package
 *
 * @domain `github.com/x/motemen/ghq`
 *
 * @install `pkgx github.com/x-motemen/ghq`
 * @aliases `github.com/x-motemen/ghq`, `x-motemen/ghq`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomxmotemenghq
 * // Or access via domain
 * const samePkg = pantry.githubcomxmotemenghq
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "x-motemen"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/x/motemen/ghq.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomxmotemenghqPackage = {
  /**
   * The display name of this package.
   */
  name: 'x-motemen' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/x/motemen/ghq' as const,
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
  installCommand: 'pkgx github.com/x-motemen/ghq' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/x-motemen/ghq',
    'x-motemen/ghq',
  ] as const,
  fullPath: 'github.com/x-motemen/ghq' as const,
}

export type GithubcomxmotemenghqPackage = typeof githubcomxmotemenghqPackage
