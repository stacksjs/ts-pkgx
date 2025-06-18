/**
 * **libunistring** - pkgx package
 *
 * @domain `gnu.org/libunistring`
 * @version `1.3.0` (3 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/libunistring.md
 *
 * @install `sh <(curl https://pkgx.sh) +gnu.org/libunistring -- $SHELL -i`
 * @aliases `libunistring`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libunistring
 * // Or access via domain
 * const samePkg = pantry.gnuorglibunistring
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gnu.org/libunistring"
 * console.log(pkg.versions[0]) // "1.3.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/libunistring.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libunistringPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnu.org/libunistring' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/libunistring' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from gnu.org/libunistring' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/libunistring/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnu.org/libunistring -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.0',
    '1.2.0',
    '1.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libunistring',
  ] as const,
  fullPath: 'gnu.org/libunistring' as const,
}

export type LibunistringPackage = typeof libunistringPackage
