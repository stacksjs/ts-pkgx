/**
 * **dateutil/dateutil** - Useful extensions to the standard Python datetime features
 *
 * @domain `github.com/dateutil/dateutil`
 * @version `2.9.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/dateutil/dateutil -- $SHELL -i`
 * @aliases `dateutil/dateutil`
 * @dependencies `github.com/benjaminp/six^1.16`, `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.dateutildateutil
 * // Or access via domain
 * const samePkg = pantry.githubcomdateutildateutil
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/dateutil/dateutil"
 * console.log(pkg.description) // "Useful extensions to the standard Python dateti..."
 * console.log(pkg.versions[0]) // "2.9.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/dateutil/dateutil.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dateutildateutilPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/dateutil/dateutil' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/dateutil/dateutil' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Useful extensions to the standard Python datetime features' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/dateutil/dateutil/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/dateutil/dateutil -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'github.com/benjaminp/six^1.16',
    'python.org~3.11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.9.0',
    '2.8.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'dateutil/dateutil',
  ] as const,
  fullPath: 'github.com/dateutil/dateutil' as const,
}

export type DateutildateutilPackage = typeof dateutildateutilPackage
