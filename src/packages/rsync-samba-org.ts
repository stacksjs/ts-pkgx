/**
 * **rsync** - An open source utility that provides fast incremental file transfer. It also has useful features for backup and restore operations among many other use cases.
 *
 * @domain `rsync.samba.org`
 * @programs `rsync`, `rsync-ssl`
 * @version `3.4.1` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +rsync.samba.org -- $SHELL -i`
 * @name `rsync`
 * @dependencies `zlib.net^1`, `facebook.com/zstd^1`, `lz4.org^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.rsync
 * // Or access via domain
 * const samePkg = pantry.rsyncsambaorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rsync"
 * console.log(pkg.description) // "An open source utility that provides fast incre..."
 * console.log(pkg.programs)    // ["rsync", "rsync-ssl"]
 * console.log(pkg.versions[0]) // "3.4.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rsync-samba-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rsyncPackage = {
  /**
   * The display name of this package.
   */
  name: 'rsync' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rsync.samba.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'An open source utility that provides fast incremental file transfer. It also has useful features for backup and restore operations among many other use cases.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rsync.samba.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +rsync.samba.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'rsync',
    'rsync-ssl',
  ] as const,
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
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.4.1',
    '3.4.0',
    '3.3.0',
    '3.2.7',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'rsync.samba.org' as const,
}

export type RsyncPackage = typeof rsyncPackage
