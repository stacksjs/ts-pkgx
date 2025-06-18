/**
 * **xpm** - pkgx package
 *
 * @domain `x.org/xpm`
 * @version `3.5.17` (2 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/x-org/xpm.md
 *
 * @install `sh <(curl https://pkgx.sh) +x.org/xpm -- $SHELL -i`
 * @aliases `xpm`
 * @dependencies `x.org/x11`, `zlib.net^1.2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xpm
 * // Or access via domain
 * const samePkg = pantry.xorgxpm
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "x.org/xpm"
 * console.log(pkg.versions[0]) // "3.5.17" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xpm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xpmPackage = {
  /**
   * The display name of this package.
   */
  name: 'x.org/xpm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xpm' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from x.org/xpm' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xpm/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +x.org/xpm -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11',
    'zlib.net^1.2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.5.17',
    '3.5.15',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'xpm',
  ] as const,
  fullPath: 'x.org/xpm' as const,
}

export type XpmPackage = typeof xpmPackage
