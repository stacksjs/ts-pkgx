/**
 * **xscrnsaver** - pkgx package
 *
 * @domain `x.org/xscrnsaver`
 * @version `1.2.4` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +x.org/xscrnsaver -- $SHELL -i`
 * @aliases `xscrnsaver`
 * @dependencies `x.org/x11^1`, `x.org/protocol`, `x.org/exts`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xscrnsaver
 * // Or access via domain
 * const samePkg = pantry.xorgxscrnsaver
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "x.org/xscrnsaver"
 * console.log(pkg.versions[0]) // "1.2.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xscrnsaver.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xscrnsaverPackage = {
  /**
   * The display name of this package.
   */
  name: 'x.org/xscrnsaver' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xscrnsaver' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xscrnsaver/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +x.org/xscrnsaver -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11^1',
    'x.org/protocol',
    'x.org/exts',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.2.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'xscrnsaver',
  ] as const,
  fullPath: 'x.org/xscrnsaver' as const,
}

export type XscrnsaverPackage = typeof xscrnsaverPackage
