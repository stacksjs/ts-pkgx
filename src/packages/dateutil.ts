/**
 * **dateutil** - pkgx package
 *
 * @domain `github.com/dateutil`
 *
 * @install `pkgx github.com/dateutil`
 * @name `dateutil`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.dateutil
 * // Or access via domain
 * const samePkg = pantry.githubcomdateutil
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "dateutil"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/dateutil.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dateutilPackage = {
  /**
   * The display name of this package.
   */
  name: 'dateutil' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/dateutil' as const,
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
  installCommand: 'pkgx github.com/dateutil' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/dateutil' as const,
}

export type DateutilPackage = typeof dateutilPackage
