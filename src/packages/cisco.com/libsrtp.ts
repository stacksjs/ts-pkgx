/**
 * **libsrtp** - Library for SRTP (Secure Realtime Transport Protocol)
 *
 * @domain `cisco.com/libsrtp`
 * @version `2.7.0` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +cisco.com/libsrtp -- $SHELL -i`
 * @aliases `libsrtp`
 * @dependencies `openssl.org~1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libsrtp
 * // Or access via domain
 * const samePkg = pantry.ciscocomlibsrtp
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cisco.com/libsrtp"
 * console.log(pkg.description) // "Library for SRTP (Secure Realtime Transport Pro..."
 * console.log(pkg.versions[0]) // "2.7.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cisco-com/libsrtp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libsrtpPackage = {
  /**
   * The display name of this package.
   */
  name: 'cisco.com/libsrtp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cisco.com/libsrtp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Library for SRTP (Secure Realtime Transport Protocol)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cisco.com/libsrtp/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +cisco.com/libsrtp -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org~1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.7.0',
    '2.6.0',
    '2.5.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libsrtp',
  ] as const,
  fullPath: 'cisco.com/libsrtp' as const,
}

export type LibsrtpPackage = typeof libsrtpPackage
