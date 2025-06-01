/**
 * **+zlib.net -- $SHELL -i** - A massively spiffy yet delicately unobtrusive compression library.
 *
 * @domain `zlib.net`
 * @version `1.3.1` (4 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/zlib-net.md
 *
 * @install `sh <(curl https://pkgx.sh) +zlib.net -- $SHELL -i`
 * @aliases `+zlib.net -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.zlibnetSHELLi
 * // Or access via domain
 * const samePkg = pantry.zlibnet
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "zlib.net"
 * console.log(pkg.description) // "A massively spiffy yet delicately unobtrusive c..."
 * console.log(pkg.versions[0]) // "1.3.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/zlib-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const zlibnetSHELLiPackage = {
  /**
   * The display name of this package.
   */
  name: 'zlib.net' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'zlib.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A massively spiffy yet delicately unobtrusive compression library.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/zlib.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +zlib.net -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.1',
    '1.3.0',
    '1.2.13',
    '1.2.12',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    '+zlib.net -- $SHELL -i',
  ] as const,
  fullPath: 'zlib.net' as const,
}

export type ZlibnetSHELLiPackage = typeof zlibnetSHELLiPackage
