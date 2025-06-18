/**
 * **github.com/xeol-io/xeol** - pkgx package
 *
 * @domain `github.com/xeol/io/xeol`
 *
 * @install `pkgx github.com/xeol-io/xeol`
 * @aliases `github.com/xeol-io/xeol`, `xeol-io/xeol`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomxeolioxeol
 * // Or access via domain
 * const samePkg = pantry.githubcomxeolioxeol
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xeol-io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/xeol/io/xeol.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomxeolioxeolPackage = {
  /**
   * The display name of this package.
   */
  name: 'xeol-io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/xeol/io/xeol' as const,
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
  installCommand: 'pkgx github.com/xeol-io/xeol' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/xeol-io/xeol',
    'xeol-io/xeol',
  ] as const,
  fullPath: 'github.com/xeol-io/xeol' as const,
}

export type GithubcomxeolioxeolPackage = typeof githubcomxeolioxeolPackage
