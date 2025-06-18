/**
 * **sf.net/libmng** - pkgx package
 *
 * @domain `sourceforge.net/libmng`
 * @version `2.0.3` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/sourceforge-net/libmng.md
 *
 * @install `sh <(curl https://pkgx.sh) +sourceforge.net/libmng -- $SHELL -i`
 * @name `sf.net/libmng`
 * @aliases `libmng`
 * @dependencies `libjpeg-turbo.org`, `littlecms.com>=2.0.0`, `zlib.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.sfnetlibmng
 * // Or access via domain
 * const samePkg = pantry.sourceforgenetlibmng
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sf.net/libmng"
 * console.log(pkg.versions[0]) // "2.0.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sourceforge-net/libmng.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sfnetlibmngPackage = {
  /**
   * The display name of this package.
   */
  name: 'sf.net/libmng' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sourceforge.net/libmng' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sourceforge.net/libmng/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +sourceforge.net/libmng -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libjpeg-turbo.org',
    'littlecms.com>=2.0.0',
    'zlib.net',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.0.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libmng',
  ] as const,
  fullPath: 'sourceforge.net/libmng' as const,
}

export type SfnetlibmngPackage = typeof sfnetlibmngPackage
