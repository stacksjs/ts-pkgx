/**
 * **eliben/pycparser** - :snake: Complete C99 parser in pure Python
 *
 * @domain `github.com/eliben/pycparser`
 * @version `2.22.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/eliben/pycparser -- $SHELL -i`
 * @aliases `eliben/pycparser`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.elibenpycparser
 * // Or access via domain
 * const samePkg = pantry.githubcomelibenpycparser
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/eliben/pycparser"
 * console.log(pkg.description) // ":snake: Complete C99 parser in pure Python"
 * console.log(pkg.versions[0]) // "2.22.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/eliben/pycparser.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const elibenpycparserPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/eliben/pycparser' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/eliben/pycparser' as const,
  /**
   * Brief description of what this package does.
   */
  description: ':snake: Complete C99 parser in pure Python' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/eliben/pycparser/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/eliben/pycparser -- $SHELL -i' as const,
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
    '2.22.0',
    '2.21.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'eliben/pycparser',
  ] as const,
  fullPath: 'github.com/eliben/pycparser' as const,
}

export type ElibenpycparserPackage = typeof elibenpycparserPackage
