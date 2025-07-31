/**
 * **rsync.samba.org** - Package from pantry: rsync.samba.org
 *
 * @domain `rsync.samba.org`
 *
 * @install `launchpad install rsync.samba.org`
 * @dependencies `zlib.net^1`, `facebook.com/zstd^1`, `lz4.org^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rsyncsambaorg
 * console.log(pkg.name)        // "rsync.samba.org"
 * console.log(pkg.description) // "Package from pantry: rsync.samba.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rsync-samba-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rsyncsambaorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'rsync.samba.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rsync.samba.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: rsync.samba.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install rsync.samba.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +rsync.samba.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install rsync.samba.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
    'facebook.com/zstd^1',
    'lz4.org^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rsync.samba.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type RsyncsambaorgPackage = typeof rsyncsambaorgPackage
