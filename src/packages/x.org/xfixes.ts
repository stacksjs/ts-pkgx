/**
 * **xfixes** - pkgx package
 *
 * @domain `x.org/xfixes`
 * @version `6.0.1` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +x.org/xfixes -- $SHELL -i`
 * @aliases `xfixes`
 * @dependencies `x.org/x11`, `x.org/protocol`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xfixes
 * // Or access via domain
 * const samePkg = pantry.xorgxfixes
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "x.org/xfixes"
 * console.log(pkg.versions[0]) // "6.0.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xfixes.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xfixesPackage = {
  /**
   * The display name of this package.
   */
  name: 'x.org/xfixes' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xfixes' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xfixes/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +x.org/xfixes -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11',
    'x.org/protocol',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '6.0.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'xfixes',
  ] as const,
  fullPath: 'x.org/xfixes' as const,
}

export type XfixesPackage = typeof xfixesPackage
