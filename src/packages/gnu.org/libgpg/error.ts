/**
 * **gnu.org/libgpg-error** - pkgx package
 *
 * @domain `gnu.org/libgpg/error`
 *
 * @install `pkgx gnu.org/libgpg-error`
 * @name `libgpg-error`
 * @aliases `gnu.org/libgpg-error`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.gnuorglibgpgerror
 * // Or access via domain
 * const samePkg = pantry.gnuorglibgpgerror
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libgpg-error"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/libgpg/error.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorglibgpgerrorPackage = {
  /**
   * The display name of this package.
   */
  name: 'libgpg-error' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/libgpg/error' as const,
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
  installCommand: 'pkgx gnu.org/libgpg-error' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'gnu.org/libgpg-error',
  ] as const,
  fullPath: 'gnu.org/libgpg-error' as const,
}

export type GnuorglibgpgerrorPackage = typeof gnuorglibgpgerrorPackage
