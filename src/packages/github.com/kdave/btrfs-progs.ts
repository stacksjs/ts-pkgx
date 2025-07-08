/**
 * **github.com/kdave/btrfs-progs** - Userspace utilities to manage btrfs filesystems
 *
 * @domain `github.com/kdave/btrfs-progs`
 * @programs `btrfs`, `btrfsck`, `btrfs-convert`, `btrfs-find-root`, `btrfs-image`, ... (+5 more)
 * @version `6.15.0` (13 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/kdave/btrfs-progs`
 * @dependencies `python.org~3.11`, `sourceforge.net/e2fsprogs^1.47`, `oberhumer.com/lzo^2.10`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomkdavebtrfsprogs
 * console.log(pkg.name)        // "github.com/kdave/btrfs-progs"
 * console.log(pkg.description) // "Userspace utilities to manage btrfs filesystems"
 * console.log(pkg.programs)    // ["btrfs", "btrfsck", ...]
 * console.log(pkg.versions[0]) // "6.15.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/kdave/btrfs-progs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomkdavebtrfsprogsPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/kdave/btrfs-progs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/kdave/btrfs-progs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Userspace utilities to manage btrfs filesystems' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/kdave/btrfs-progs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/kdave/btrfs-progs' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'btrfs',
    'btrfsck',
    'btrfs-convert',
    'btrfs-find-root',
    'btrfs-image',
    'btrfs-map-logical',
    'btrfs-select-super',
    'btrfstune',
    'fsck.btrfs',
    'mkfs.btrfs',
  ] as const,
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
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '6.15.0',
    '6.14.0',
    '6.13.0',
    '6.12.0',
    '6.11.0',
    '6.10.1',
    '6.10.0',
    '6.9.2',
    '6.9.1',
    '6.9.0',
    '6.8.1',
    '6.8.0',
    '6.7.1',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/kdave/btrfs-progs -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/kdave/btrfs-progs' as const,
}

export type GithubcomkdavebtrfsprogsPackage = typeof githubcomkdavebtrfsprogsPackage
