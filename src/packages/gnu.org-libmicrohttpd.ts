/**
 * **libmicrohttpd** - pkgx package
 *
 * @domain `gnu.org/libmicrohttpd`
 * @version `1.0.1` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/libmicrohttpd.md
 *
 * @install `sh <(curl https://pkgx.sh) +gnu.org/libmicrohttpd -- $SHELL -i`
 * @aliases `libmicrohttpd`
 * @dependencies `gnu.org/libunistring^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libmicrohttpd
 * // Or access via domain
 * const samePkg = pantry.gnuorglibmicrohttpd
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gnu.org/libmicrohttpd"
 * console.log(pkg.versions[0]) // "1.0.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/libmicrohttpd.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libmicrohttpdPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnu.org/libmicrohttpd' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/libmicrohttpd' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from gnu.org/libmicrohttpd' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/libmicrohttpd/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnu.org/libmicrohttpd -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/libunistring^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.0.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libmicrohttpd',
  ] as const,
  fullPath: 'gnu.org/libmicrohttpd' as const,
}

export type LibmicrohttpdPackage = typeof libmicrohttpdPackage
