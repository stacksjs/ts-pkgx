/**
 * **github.com/cpburnz/python-pathspec** - pkgx package
 *
 * @domain `github.com/cpburnz/python/pathspec`
 *
 * @install `pkgx github.com/cpburnz/python-pathspec`
 * @aliases `github.com/cpburnz/python-pathspec`, `cpburnz/python-pathspec`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomcpburnzpythonpathspec
 * // Or access via domain
 * const samePkg = pantry.githubcomcpburnzpythonpathspec
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cpburnz"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/cpburnz/python/pathspec.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomcpburnzpythonpathspecPackage = {
  /**
   * The display name of this package.
   */
  name: 'cpburnz' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/cpburnz/python/pathspec' as const,
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
  installCommand: 'pkgx github.com/cpburnz/python-pathspec' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/cpburnz/python-pathspec',
    'cpburnz/python-pathspec',
  ] as const,
  fullPath: 'github.com/cpburnz/python-pathspec' as const,
}

export type GithubcomcpburnzpythonpathspecPackage = typeof githubcomcpburnzpythonpathspecPackage
