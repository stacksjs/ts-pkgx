/**
 * **x.org/util-macros** - pkgx package
 *
 * @domain `x.org/util/macros`
 *
 * @install `pkgx x.org/util-macros`
 * @name `util-macros`
 * @aliases `x.org/util-macros`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xorgutilmacros
 * // Or access via domain
 * const samePkg = pantry.xorgutilmacros
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "util-macros"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/util/macros.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgutilmacrosPackage = {
  /**
   * The display name of this package.
   */
  name: 'util-macros' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/util/macros' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx x.org/util-macros' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'x.org/util-macros',
  ] as const,
  fullPath: 'x.org/util-macros' as const,
}

export type XorgutilmacrosPackage = typeof xorgutilmacrosPackage
