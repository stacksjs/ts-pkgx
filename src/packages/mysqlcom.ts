/**
 * **mysql.com** - Package from pantry: mysql.com
 *
 * @domain `mysql.com`
 *
 * @install `launchpad install mysql.com`
 * @dependencies `unicode.org^71`, `libevent.org^2`, `lz4.org^1`, ... (+8 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mysqlcom
 * console.log(pkg.name)        // "mysql.com"
 * console.log(pkg.description) // "Package from pantry: mysql.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mysql-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mysqlcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'mysql.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mysql.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: mysql.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mysql.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +mysql.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mysql.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'unicode.org^71',
    'libevent.org^2',
    'lz4.org^1',
    'openssl.org^1.1',
    'protobuf.dev^21',
    'zlib.net^1.2',
    'facebook.com/zstd^1',
    'curl.se>=6.0',
    'thrysoee.dk/editline^3',
    'developers.yubico.com/libfido2^1',
    'linux:gnu.org/gcc/libstdcxx@14',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mysql.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MysqlcomPackage = typeof mysqlcomPackage
