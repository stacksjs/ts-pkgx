/**
 * **git-chglog** - CHANGELOG generator implemented in Go (Golang).
 *
 * @domain `github.com/git-chglog`
 * @programs `git-chglog`
 * @version `0.15.4` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) git-chglog`
 * @name `git-chglog`
 * @aliases `github.com-git-chglog`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gitchglog
 * // Or access via domain
 * const samePkg = pantry.githubcomgitchglog
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "git-chglog"
 * console.log(pkg.description) // "CHANGELOG generator implemented in Go (Golang)."
 * console.log(pkg.programs)    // ["git-chglog"]
 * console.log(pkg.versions[0]) // "0.15.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/git-chglog.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitchglogPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-chglog' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/git-chglog' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'CHANGELOG generator implemented in Go (Golang).' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/git-chglog/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) git-chglog' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'git-chglog',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.15.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com-git-chglog',
  ] as const,
  fullPath: 'github.com-git-chglog' as const,
}

export type GitchglogPackage = typeof gitchglogPackage
