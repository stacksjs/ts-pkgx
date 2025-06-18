/**
 * **xmu** - pkgx package
 *
 * @domain `x.org/xmu`
 * @version `1.2.1` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +x.org/xmu -- $SHELL -i`
 * @aliases `xmu`
 * @dependencies `x.org/exts`, `x.org/xt`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xmu
 * // Or access via domain
 * const samePkg = pantry.xorgxmu
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "x.org/xmu"
 * console.log(pkg.versions[0]) // "1.2.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xmu.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xmuPackage = {
  /**
   * The display name of this package.
   */
  name: 'x.org/xmu' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xmu' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xmu/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +x.org/xmu -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/exts',
    'x.org/xt',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.2.1',
    '1.2.0',
    '1.1.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'xmu',
  ] as const,
  fullPath: 'x.org/xmu' as const,
}

export type XmuPackage = typeof xmuPackage
