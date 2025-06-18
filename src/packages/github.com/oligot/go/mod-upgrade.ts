/**
 * **github.com/oligot/go-mod-upgrade** - pkgx package
 *
 * @domain `github.com/oligot/go/mod-upgrade`
 *
 * @install `pkgx github.com/oligot/go-mod-upgrade`
 * @aliases `github.com/oligot/go-mod-upgrade`, `oligot/go-mod-upgrade`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomoligotgomodupgrade
 * // Or access via domain
 * const samePkg = pantry.githubcomoligotgomodupgrade
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "oligot"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/oligot/go/mod-upgrade.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomoligotgomodupgradePackage = {
  /**
   * The display name of this package.
   */
  name: 'oligot' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/oligot/go/mod-upgrade' as const,
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
  installCommand: 'pkgx github.com/oligot/go-mod-upgrade' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/oligot/go-mod-upgrade',
    'oligot/go-mod-upgrade',
  ] as const,
  fullPath: 'github.com/oligot/go-mod-upgrade' as const,
}

export type GithubcomoligotgomodupgradePackage = typeof githubcomoligotgomodupgradePackage
