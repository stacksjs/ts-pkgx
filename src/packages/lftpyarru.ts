/**
 * **lftp.yar.ru** - Package from pantry: lftp.yar.ru
 *
 * @domain `lftp.yar.ru`
 *
 * @install `launchpad install lftp.yar.ru`
 * @dependencies `gnu.org/libidn2`, `gnu.org/gettext`, `gnu.org/readline`, ... (+5 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.lftpyarru
 * console.log(pkg.name)        // "lftp.yar.ru"
 * console.log(pkg.description) // "Package from pantry: lftp.yar.ru"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lftp-yar-ru.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lftpyarruPackage = {
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
  description: 'Package from pantry: lftp.yar.ru' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install lftp.yar.ru' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +lftp.yar.ru -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install lftp.yar.ru' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/lftp.yar.ru/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LftpyarruPackage = typeof lftpyarruPackage
