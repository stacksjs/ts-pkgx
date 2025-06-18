/**
 * **github.com/kaspanet/rusty-kaspa** - pkgx package
 *
 * @domain `github.com/kaspanet/rusty/kaspa`
 *
 * @install `pkgx github.com/kaspanet/rusty-kaspa`
 * @aliases `github.com/kaspanet/rusty-kaspa`, `kaspanet/rusty-kaspa`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomkaspanetrustykaspa
 * // Or access via domain
 * const samePkg = pantry.githubcomkaspanetrustykaspa
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "kaspanet"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/kaspanet/rusty/kaspa.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomkaspanetrustykaspaPackage = {
  /**
   * The display name of this package.
   */
  name: 'kaspanet' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/kaspanet/rusty/kaspa' as const,
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
  installCommand: 'pkgx github.com/kaspanet/rusty-kaspa' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/kaspanet/rusty-kaspa',
    'kaspanet/rusty-kaspa',
  ] as const,
  fullPath: 'github.com/kaspanet/rusty-kaspa' as const,
}

export type GithubcomkaspanetrustykaspaPackage = typeof githubcomkaspanetrustykaspaPackage
