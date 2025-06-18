/**
 * **github.com/util-linux/util-linux** - pkgx package
 *
 * @domain `github.com/util/linux/util-linux`
 *
 * @install `pkgx github.com/util-linux/util-linux`
 * @aliases `github.com/util-linux/util-linux`, `util-linux/util-linux`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomutillinuxutillinux
 * // Or access via domain
 * const samePkg = pantry.githubcomutillinuxutillinux
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "util-linux"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/util/linux/util-linux.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomutillinuxutillinuxPackage = {
  /**
   * The display name of this package.
   */
  name: 'util-linux' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/util/linux/util-linux' as const,
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
  installCommand: 'pkgx github.com/util-linux/util-linux' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/util-linux/util-linux',
    'util-linux/util-linux',
  ] as const,
  fullPath: 'github.com/util-linux/util-linux' as const,
}

export type GithubcomutillinuxutillinuxPackage = typeof githubcomutillinuxutillinuxPackage
