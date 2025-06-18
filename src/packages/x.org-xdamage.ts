/**
 * **xdamage** - pkgx package
 *
 * @domain `x.org/xdamage`
 * @version `1.1.6` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/x-org/xdamage.md
 *
 * @install `sh <(curl https://pkgx.sh) +x.org/xdamage -- $SHELL -i`
 * @aliases `xdamage`
 * @dependencies `x.org/x11`, `x.org/protocol`, `x.org/xfixes`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xdamage
 * // Or access via domain
 * const samePkg = pantry.xorgxdamage
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "x.org/xdamage"
 * console.log(pkg.versions[0]) // "1.1.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xdamage.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xdamagePackage = {
  /**
   * The display name of this package.
   */
  name: 'x.org/xdamage' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xdamage' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xdamage/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +x.org/xdamage -- $SHELL -i' as const,
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
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.6',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'xdamage',
  ] as const,
  fullPath: 'x.org/xdamage' as const,
}

export type XdamagePackage = typeof xdamagePackage
