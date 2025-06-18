/**
 * **xv** - pkgx package
 *
 * @domain `x.org/xv`
 * @version `1.0.13` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +x.org/xv -- $SHELL -i`
 * @aliases `xv`
 * @dependencies `x.org/x11`, `x.org/protocol`, `x.org/exts`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xv
 * // Or access via domain
 * const samePkg = pantry.xorgxv
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "x.org/xv"
 * console.log(pkg.versions[0]) // "1.0.13" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xv.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xvPackage = {
  /**
   * The display name of this package.
   */
  name: 'x.org/xv' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xv' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xv/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +x.org/xv -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11',
    'x.org/protocol',
    'x.org/exts',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.0.13',
    '1.0.12',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'xv',
  ] as const,
  fullPath: 'x.org/xv' as const,
}

export type XvPackage = typeof xvPackage
