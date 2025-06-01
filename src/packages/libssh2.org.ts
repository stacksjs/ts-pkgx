/**
 * **+libssh2.org -- $SHELL -i** - the SSH library
 *
 * @domain `libssh2.org`
 * @version `1.11.1` (3 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/libssh2-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +libssh2.org -- $SHELL -i`
 * @aliases `+libssh2.org -- $SHELL -i`
 * @dependencies `openssl.org^1.1`, `zlib.net^1.2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libssh2orgSHELLi
 * // Or access via domain
 * const samePkg = pantry.libssh2org
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libssh2.org"
 * console.log(pkg.description) // "the SSH library"
 * console.log(pkg.versions[0]) // "1.11.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libssh2-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libssh2orgSHELLiPackage = {
  /**
   * The display name of this package.
   */
  name: 'libssh2.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libssh2.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'the SSH library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libssh2.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +libssh2.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'zlib.net^1.2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.11.1',
    '1.11.0',
    '1.10.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    '+libssh2.org -- $SHELL -i',
  ] as const,
  fullPath: 'libssh2.org' as const,
}

export type Libssh2orgSHELLiPackage = typeof libssh2orgSHELLiPackage
