/**
 * **github.com/sekrit-twc/zimg** - pkgx package
 *
 * @domain `github.com/sekrit/twc/zimg`
 *
 * @install `pkgx github.com/sekrit-twc/zimg`
 * @aliases `github.com/sekrit-twc/zimg`, `sekrit-twc/zimg`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomsekrittwczimg
 * // Or access via domain
 * const samePkg = pantry.githubcomsekrittwczimg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sekrit-twc"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/sekrit/twc/zimg.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomsekrittwczimgPackage = {
  /**
   * The display name of this package.
   */
  name: 'sekrit-twc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/sekrit/twc/zimg' as const,
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
  installCommand: 'pkgx github.com/sekrit-twc/zimg' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/sekrit-twc/zimg',
    'sekrit-twc/zimg',
  ] as const,
  fullPath: 'github.com/sekrit-twc/zimg' as const,
}

export type GithubcomsekrittwczimgPackage = typeof githubcomsekrittwczimgPackage
