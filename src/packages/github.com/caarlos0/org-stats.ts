/**
 * **org-stats** - Get the contributor stats summary from all repos of any given organization
 *
 * @domain `github.com/caarlos0/org-stats`
 * @programs `org-stats`
 * @version `1.12.2` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install org-stats`
 * @name `org-stats`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.orgstats
 * // Or access via domain
 * const samePkg = pantry.githubcomcaarlos0orgstats
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "org-stats"
 * console.log(pkg.description) // "Get the contributor stats summary from all repo..."
 * console.log(pkg.programs)    // ["org-stats"]
 * console.log(pkg.versions[0]) // "1.12.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/caarlos0/org-stats.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const orgstatsPackage = {
  /**
   * The display name of this package.
   */
  name: 'org-stats' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/caarlos0/org-stats' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Get the contributor stats summary from all repos of any given organization' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/caarlos0/org-stats/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install org-stats' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'org-stats',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.12.2',
    '1.12.1',
    '1.12.0',
    '1.11.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type OrgstatsPackage = typeof orgstatsPackage
