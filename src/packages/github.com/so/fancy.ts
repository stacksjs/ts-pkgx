/**
 * **github.com/so-fancy** - pkgx package
 *
 * @domain `github.com/so/fancy`
 *
 * @install `pkgx github.com/so-fancy`
 * @name `so-fancy`
 * @aliases `github.com/so-fancy`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomsofancy
 * // Or access via domain
 * const samePkg = pantry.githubcomsofancy
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "so-fancy"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/so/fancy.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomsofancyPackage = {
  /**
   * The display name of this package.
   */
  name: 'so-fancy' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/so/fancy' as const,
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
  installCommand: 'pkgx github.com/so-fancy' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/so-fancy',
  ] as const,
  fullPath: 'github.com/so-fancy' as const,
}

export type GithubcomsofancyPackage = typeof githubcomsofancyPackage
