/**
 * **lftp** - sophisticated command line file transfer program (ftp, http, sftp, fish, torrent)
 *
 * @domain `lftp.yar.ru`
 * @programs `lftp`, `lftpget`
 * @version `4.9.3` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +lftp.yar.ru -- $SHELL -i`
 * @aliases `lftp`
 * @dependencies `gnu.org/libidn2`, `gnu.org/gettext`, `gnu.org/readline`, ... (+5 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.lftp
 * // Or access via domain
 * const samePkg = pantry.lftpyarru
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "lftp.yar.ru"
 * console.log(pkg.description) // "sophisticated command line file transfer progra..."
 * console.log(pkg.programs)    // ["lftp", "lftpget"]
 * console.log(pkg.versions[0]) // "4.9.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lftp-yar-ru.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lftpPackage = {
  /**
   * The display name of this package.
   */
  name: 'lftp.yar.ru' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'lftp.yar.ru' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'sophisticated command line file transfer program (ftp, http, sftp, fish, torrent)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/lftp.yar.ru/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +lftp.yar.ru -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'lftp',
    'lftpget',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'gnu.org/libidn2',
    'gnu.org/gettext',
    'gnu.org/readline',
    'openssl.org^1.1',
    'zlib.net',
    'invisible-island.net/ncurses',
    'libexpat.github.io',
    'linux:gnu.org/gcc/libstdcxx@14',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.9.3',
    '4.9.2',
    '4.9.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'lftp',
  ] as const,
}

export type LftpPackage = typeof lftpPackage
