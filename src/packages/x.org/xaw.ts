/**
 * **xaw** - pkgx package
 *
 * @domain `x.org/xaw`
 * @version `1.0.16` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +x.org/xaw -- $SHELL -i`
 * @aliases `xaw`
 * @dependencies `x.org/x11`, `x.org/exts`, `x.org/xmu`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xaw
 * // Or access via domain
 * const samePkg = pantry.xorgxaw
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "x.org/xaw"
 * console.log(pkg.versions[0]) // "1.0.16" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xaw.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xawPackage = {
  /**
   * The display name of this package.
   */
  name: 'x.org/xaw' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xaw' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xaw/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +x.org/xaw -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11',
    'x.org/exts',
    'x.org/xmu',
    'x.org/xt',
    'x.org/xpm',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.0.16',
    '1.0.15',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'xaw',
  ] as const,
  fullPath: 'x.org/xaw' as const,
}

export type XawPackage = typeof xawPackage
