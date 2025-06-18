/**
 * **github.com/ColinIanKing/stress-ng** - pkgx package
 *
 * @domain `github.com/ColinIanKing/stress/ng`
 *
 * @install `pkgx github.com/ColinIanKing/stress-ng`
 * @aliases `github.com/ColinIanKing/stress-ng`, `ColinIanKing/stress-ng`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomColinIanKingstressng
 * // Or access via domain
 * const samePkg = pantry.githubcomcoliniankingstressng
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ColinIanKing"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ColinIanKing/stress/ng.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomColinIanKingstressngPackage = {
  /**
   * The display name of this package.
   */
  name: 'ColinIanKing' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ColinIanKing/stress/ng' as const,
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
  installCommand: 'pkgx github.com/ColinIanKing/stress-ng' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/ColinIanKing/stress-ng',
    'ColinIanKing/stress-ng',
  ] as const,
  fullPath: 'github.com/ColinIanKing/stress-ng' as const,
}

export type GithubcomColinIanKingstressngPackage = typeof githubcomColinIanKingstressngPackage
