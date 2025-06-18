/**
 * **xtrans** - pkgx package
 *
 * @domain `x.org/xtrans`
 * @version `1.4.0` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/x-org/xtrans.md
 *
 * @install `sh <(curl https://pkgx.sh) +x.org/xtrans -- $SHELL -i`
 * @aliases `xtrans`
 * @dependencies `x.org/protocol`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xtrans
 * // Or access via domain
 * const samePkg = pantry.xorgxtrans
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "x.org/xtrans"
 * console.log(pkg.versions[0]) // "1.4.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xtrans.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xtransPackage = {
  /**
   * The display name of this package.
   */
  name: 'x.org/xtrans' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xtrans' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xtrans/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +x.org/xtrans -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/protocol',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.4.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'xtrans',
  ] as const,
  fullPath: 'x.org/xtrans' as const,
}

export type XtransPackage = typeof xtransPackage
