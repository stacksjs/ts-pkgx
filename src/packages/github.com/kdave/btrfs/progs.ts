/**
 * **github.com/kdave/btrfs-progs** - pkgx package
 *
 * @domain `github.com/kdave/btrfs/progs`
 *
 * @install `pkgx github.com/kdave/btrfs-progs`
 * @aliases `github.com/kdave/btrfs-progs`, `kdave/btrfs-progs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomkdavebtrfsprogs
 * // Or access via domain
 * const samePkg = pantry.githubcomkdavebtrfsprogs
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "kdave"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/kdave/btrfs/progs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomkdavebtrfsprogsPackage = {
  /**
   * The display name of this package.
   */
  name: 'kdave' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/kdave/btrfs/progs' as const,
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
  installCommand: 'pkgx github.com/kdave/btrfs-progs' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/kdave/btrfs-progs',
    'kdave/btrfs-progs',
  ] as const,
  fullPath: 'github.com/kdave/btrfs-progs' as const,
}

export type GithubcomkdavebtrfsprogsPackage = typeof githubcomkdavebtrfsprogsPackage
