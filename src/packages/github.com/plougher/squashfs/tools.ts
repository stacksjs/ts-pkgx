/**
 * **github.com/plougher/squashfs-tools** - pkgx package
 *
 * @domain `github.com/plougher/squashfs/tools`
 *
 * @install `pkgx github.com/plougher/squashfs-tools`
 * @aliases `github.com/plougher/squashfs-tools`, `plougher/squashfs-tools`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomploughersquashfstools
 * // Or access via domain
 * const samePkg = pantry.githubcomploughersquashfstools
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "plougher"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/plougher/squashfs/tools.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomploughersquashfstoolsPackage = {
  /**
   * The display name of this package.
   */
  name: 'plougher' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/plougher/squashfs/tools' as const,
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
  installCommand: 'pkgx github.com/plougher/squashfs-tools' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/plougher/squashfs-tools',
    'plougher/squashfs-tools',
  ] as const,
  fullPath: 'github.com/plougher/squashfs-tools' as const,
}

export type GithubcomploughersquashfstoolsPackage = typeof githubcomploughersquashfstoolsPackage
