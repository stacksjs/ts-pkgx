/**
 * **benjaminp/six** - Python 2 and 3 compatibility library
 *
 * @domain `github.com/benjaminp/six`
 * @version `1.17.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/benjaminp/six -- $SHELL -i`
 * @aliases `benjaminp/six`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.benjaminpsix
 * // Or access via domain
 * const samePkg = pantry.githubcombenjaminpsix
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/benjaminp/six"
 * console.log(pkg.description) // "Python 2 and 3 compatibility library"
 * console.log(pkg.versions[0]) // "1.17.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/benjaminp/six.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const benjaminpsixPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/benjaminp/six' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/benjaminp/six' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Python 2 and 3 compatibility library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/benjaminp/six/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/benjaminp/six -- $SHELL -i' as const,
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
    '1.17.0',
    '1.16.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'benjaminp/six',
  ] as const,
  fullPath: 'github.com/benjaminp/six' as const,
}

export type BenjaminpsixPackage = typeof benjaminpsixPackage
