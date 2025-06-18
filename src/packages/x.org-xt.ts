/**
 * **xt** - pkgx package
 *
 * @domain `x.org/xt`
 * @version `1.3.1` (2 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/x-org/xt.md
 *
 * @install `sh <(curl https://pkgx.sh) +x.org/xt -- $SHELL -i`
 * @aliases `xt`
 * @dependencies `x.org/ice`, `x.org/sm`, `x.org/x11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xt
 * // Or access via domain
 * const samePkg = pantry.xorgxt
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "x.org/xt"
 * console.log(pkg.versions[0]) // "1.3.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xt.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xtPackage = {
  /**
   * The display name of this package.
   */
  name: 'x.org/xt' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xt' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from x.org/xt' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xt/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +x.org/xt -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/ice',
    'x.org/sm',
    'x.org/x11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.1',
    '1.3.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'xt',
  ] as const,
  fullPath: 'x.org/xt' as const,
}

export type XtPackage = typeof xtPackage
