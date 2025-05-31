/**
 * **aria2c** - aria2 is a lightweight multi-protocol & multi-source, cross platform download utility operated in command-line. It supports HTTP/HTTPS, FTP, SFTP, BitTorrent and Metalink.
 *
 * @domain `aria2.github.io`
 * @programs `aria2c`
 * @version `1.37.0` (2 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/aria2-github-io.md
 * @install `sh <(curl https://pkgx.sh) aria2c`
 * @aliases `aria2c`
 * @dependencies `zlib.net^1`, `openssl.org^1`, `libexpat.github.io`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.aria2c
 * // Or access via domain
 * const samePkg = pantry.aria2githubio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "aria2c"
 * console.log(pkg.description) // "aria2 is a lightweight multi-protocol & multi-s..."
 * console.log(pkg.programs)    // ["aria2c"]
 * console.log(pkg.versions[0]) // "1.37.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/aria2-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const aria2cPackage = {
  /**
   * The display name of this package.
   */
  name: 'aria2c' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'aria2.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'aria2 is a lightweight multi-protocol & multi-source, cross platform download utility operated in command-line. It supports HTTP/HTTPS, FTP, SFTP, BitTorrent and Metalink.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/aria2.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) aria2c' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'aria2c',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
    'openssl.org^1',
    'libexpat.github.io',
    'sqlite.org^3',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.37.0',
    '1.36.0',
  ] as const,
  fullPath: 'aria2.github.io' as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'aria2c',
  ] as const,
}

export type Aria2cPackage = typeof aria2cPackage
