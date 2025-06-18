/**
 * **cpburnz/python-pathspec** - Utility library for gitignore style pattern matching of file paths.
 *
 * @domain `github.com/cpburnz/python-pathspec`
 * @version `0.12.1` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/cpburnz/python-pathspec -- $SHELL -i`
 * @aliases `cpburnz/python-pathspec`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cpburnzpythonpathspec
 * // Or access via domain
 * const samePkg = pantry.githubcomcpburnzpythonpathspec
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/cpburnz/python-pathspec"
 * console.log(pkg.description) // "Utility library for gitignore style pattern mat..."
 * console.log(pkg.versions[0]) // "0.12.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/cpburnz/python-pathspec.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cpburnzpythonpathspecPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/cpburnz/python-pathspec' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/cpburnz/python-pathspec' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Utility library for gitignore style pattern matching of file paths.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/cpburnz/python-pathspec/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/cpburnz/python-pathspec -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.12.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'cpburnz/python-pathspec',
  ] as const,
  fullPath: 'github.com/cpburnz/python-pathspec' as const,
}

export type CpburnzpythonpathspecPackage = typeof cpburnzpythonpathspecPackage
