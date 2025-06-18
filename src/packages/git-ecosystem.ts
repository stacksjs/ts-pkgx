/**
 * **git-ecosystem** - pkgx package
 *
 * @domain `github.com/git-ecosystem`
 *
 * @install `pkgx github.com/git-ecosystem`
 * @name `git-ecosystem`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gitecosystem
 * // Or access via domain
 * const samePkg = pantry.githubcomgitecosystem
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "git-ecosystem"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/git-ecosystem.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitecosystemPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-ecosystem' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/git-ecosystem' as const,
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
  installCommand: 'pkgx github.com/git-ecosystem' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/git-ecosystem' as const,
}

export type GitecosystemPackage = typeof gitecosystemPackage
