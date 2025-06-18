/**
 * **kjd/idna** - Internationalized Domain Names for Python (IDNA 2008 and UTS #46)
 *
 * @domain `github.com/kjd/idna`
 * @version `3.10.0` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/kjd/idna -- $SHELL -i`
 * @aliases `kjd/idna`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.kjdidna
 * // Or access via domain
 * const samePkg = pantry.githubcomkjdidna
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/kjd/idna"
 * console.log(pkg.description) // "Internationalized Domain Names for Python (IDNA..."
 * console.log(pkg.versions[0]) // "3.10.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/kjd/idna.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kjdidnaPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/kjd/idna' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/kjd/idna' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Internationalized Domain Names for Python (IDNA 2008 and UTS #46)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/kjd/idna/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/kjd/idna -- $SHELL -i' as const,
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
    '3.10.0',
    '3.9.0',
    '3.8.0',
    '3.7.0',
    '3.6.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'kjd/idna',
  ] as const,
  fullPath: 'github.com/kjd/idna' as const,
}

export type KjdidnaPackage = typeof kjdidnaPackage
