/**
 * **+lftp.yar.ru -- $SHELL -i** - sophisticated command line file transfer program (ftp, http, sftp, fish, torrent)
 *
 * @domain `lftp.yar.ru`
 * @programs `lftp`, `lftpget`
 * @version `4.9.3` (3 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/lftp-yar-ru.md
 *
 * @install `sh <(curl https://pkgx.sh) +lftp.yar.ru -- $SHELL -i`
 * @aliases `+lftp.yar.ru -- $SHELL -i`, `lftp`
 * @dependencies `gnu.org/libidn2`, `gnu.org/gettext`, `gnu.org/readline`, ... (+6 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.lftpyarruSHELLi
 * // Or access via domain
 * const samePkg = pantry.lftpyarru
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "lftp"
 * console.log(pkg.description) // "sophisticated command line file transfer progra..."
 * console.log(pkg.programs)    // ["lftp", "lftpget"]
 * console.log(pkg.versions[0]) // "4.9.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lftp-yar-ru.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lftpyarruSHELLiPackage = {
  /**
   * The display name of this package.
   */
  name: 'lftp' as const,
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
  installCommand: 'sh <(curl https://pkgx.sh) +lftp.yar.ru -- $SHELL -i' as const,
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
   */
  dependencies: [
    'gnu.org/libidn2',
    'gnu.org/gettext',
    'gnu.org/readline',
    'openssl.org^1.1',
    'zlib.net',
    'invisible-island.net/ncurses',
    'libexpat.github.io',
    'linuxgnu.org/gcc/libstdcxx@14',
    'gnu.org/gcc/libstdcxx@14',
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
    '+lftp.yar.ru -- $SHELL -i',
    'lftp',
  ] as const,
  fullPath: 'lftp.yar.ru' as const,
}

export type LftpyarruSHELLiPackage = typeof lftpyarruSHELLiPackage
