/**
 * **btrfs-progs** - Package from pantry: github.com/kdave/btrfs-progs
 *
 * @domain `github.com/kdave/btrfs-progs`
 *
 * @install `launchpad install github.com/kdave/btrfs-progs`
 * @dependencies `python.org~3.11`, `sourceforge.net/e2fsprogs^1.47`, `oberhumer.com/lzo^2.10`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomkdavebtrfsprogs
 * console.log(pkg.name)        // "btrfs-progs"
 * console.log(pkg.description) // "Package from pantry: github.com/kdave/btrfs-progs"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/kdave/btrfs-progs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomkdavebtrfsprogsPackage = {
  /**
   * The display name of this package.
   */
  name: 'btrfs-progs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/kdave/btrfs-progs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/kdave/btrfs-progs' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/kdave/btrfs-progs' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/kdave/btrfs-progs -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/kdave/btrfs-progs' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
    'sourceforge.net/e2fsprogs^1.47',
    'oberhumer.com/lzo^2.10',
    'systemd.io^255 # for libudev',
    'github.com/util-linux/util-linux^2.39',
    'zlib.net^1.3',
    'facebook.com/zstd^1.5',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/kdave/btrfs-progs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomkdavebtrfsprogsPackage = typeof githubcomkdavebtrfsprogsPackage
