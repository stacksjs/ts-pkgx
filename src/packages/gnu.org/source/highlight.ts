/**
 * **gnu.org/source-highlight** - pkgx package
 *
 * @domain `gnu.org/source/highlight`
 *
 * @install `pkgx gnu.org/source-highlight`
 * @name `source-highlight`
 * @aliases `gnu.org/source-highlight`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.gnuorgsourcehighlight
 * // Or access via domain
 * const samePkg = pantry.gnuorgsourcehighlight
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "source-highlight"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/source/highlight.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgsourcehighlightPackage = {
  /**
   * The display name of this package.
   */
  name: 'source-highlight' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/source/highlight' as const,
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
  installCommand: 'pkgx gnu.org/source-highlight' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'gnu.org/source-highlight',
  ] as const,
  fullPath: 'gnu.org/source-highlight' as const,
}

export type GnuorgsourcehighlightPackage = typeof gnuorgsourcehighlightPackage
