/**
 * **xi** - pkgx package
 *
 * @domain `x.org/xi`
 * @version `1.8.2` (2 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/x-org/xi.md
 *
 * @install `sh <(curl https://pkgx.sh) +x.org/xi -- $SHELL -i`
 * @aliases `xi`
 * @dependencies `x.org/x11`, `x.org/protocol`, `x.org/xfixes`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xi
 * // Or access via domain
 * const samePkg = pantry.xorgxi
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "x.org/xi"
 * console.log(pkg.versions[0]) // "1.8.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xi.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xiPackage = {
  /**
   * The display name of this package.
   */
  name: 'x.org/xi' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xi' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xi/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +x.org/xi -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11',
    'x.org/protocol',
    'x.org/xfixes',
    'x.org/exts',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.8.2',
    '1.8.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'xi',
  ] as const,
  fullPath: 'x.org/xi' as const,
}

export type XiPackage = typeof xiPackage
