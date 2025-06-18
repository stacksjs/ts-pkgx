/**
 * **github** - pkgx package
 *
 * @domain `github.com/github`
 *
 * @install `pkgx github.com/github`
 * @name `github`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.github
 * // Or access via domain
 * const samePkg = pantry.githubcomgithub
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/github.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubPackage = {
  /**
   * The display name of this package.
   */
  name: 'github' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/github' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/github' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/github' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/github' as const,
}

export type GithubPackage = typeof githubPackage
