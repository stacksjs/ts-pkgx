/**
 * **xft** - pkgx package
 *
 * @domain `x.org/xft`
 * @version `2.3.9` (2 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/x-org/xft.md
 *
 * @install `sh <(curl https://pkgx.sh) +x.org/xft -- $SHELL -i`
 * @aliases `xft`
 * @dependencies `freedesktop.org/fontconfig^2.14`, `x.org/xrender^0.9`, `sourceware.org/bzip2^1`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xft
 * // Or access via domain
 * const samePkg = pantry.xorgxft
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "x.org/xft"
 * console.log(pkg.versions[0]) // "2.3.9" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xft.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xftPackage = {
  /**
   * The display name of this package.
   */
  name: 'x.org/xft' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xft' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from x.org/xft' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xft/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +x.org/xft -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'freedesktop.org/fontconfig^2.14',
    'x.org/xrender^0.9',
    'sourceware.org/bzip2^1',
    'zlib.net^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.3.9',
    '2.3.8',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'xft',
  ] as const,
  fullPath: 'x.org/xft' as const,
}

export type XftPackage = typeof xftPackage
