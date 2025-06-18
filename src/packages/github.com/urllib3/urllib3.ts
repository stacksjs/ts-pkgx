/**
 * **urllib3/urllib3** - urllib3 is a user-friendly HTTP client library for Python
 *
 * @domain `github.com/urllib3/urllib3`
 * @version `2.5.0` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/urllib3/urllib3 -- $SHELL -i`
 * @aliases `urllib3/urllib3`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.urllib3urllib3
 * // Or access via domain
 * const samePkg = pantry.githubcomurllib3urllib3
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/urllib3/urllib3"
 * console.log(pkg.description) // "urllib3 is a user-friendly HTTP client library ..."
 * console.log(pkg.versions[0]) // "2.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/urllib3/urllib3.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const urllib3urllib3Package = {
  /**
   * The display name of this package.
   */
  name: 'github.com/urllib3/urllib3' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/urllib3/urllib3' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'urllib3 is a user-friendly HTTP client library for Python' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/urllib3/urllib3/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/urllib3/urllib3 -- $SHELL -i' as const,
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
    '2.5.0',
    '2.4.0',
    '2.3.0',
    '2.2.3',
    '2.2.2',
    '2.2.1',
    '2.2.0',
    '1.26.20',
    '1.26.19',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'urllib3/urllib3',
  ] as const,
  fullPath: 'github.com/urllib3/urllib3' as const,
}

export type Urllib3urllib3Package = typeof urllib3urllib3Package
