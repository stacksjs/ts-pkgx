/**
 * **github.com/caarlos0/org-stats** - pkgx package
 *
 * @domain `github.com/caarlos0/org/stats`
 *
 * @install `pkgx github.com/caarlos0/org-stats`
 * @aliases `github.com/caarlos0/org-stats`, `caarlos0/org-stats`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomcaarlos0orgstats
 * // Or access via domain
 * const samePkg = pantry.githubcomcaarlos0orgstats
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "caarlos0"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/caarlos0/org/stats.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomcaarlos0orgstatsPackage = {
  /**
   * The display name of this package.
   */
  name: 'caarlos0' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/caarlos0/org/stats' as const,
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
  installCommand: 'pkgx github.com/caarlos0/org-stats' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/caarlos0/org-stats',
    'caarlos0/org-stats',
  ] as const,
  fullPath: 'github.com/caarlos0/org-stats' as const,
}

export type Githubcomcaarlos0orgstatsPackage = typeof githubcomcaarlos0orgstatsPackage
