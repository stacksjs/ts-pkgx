/**
 * **gnu.org/autoconf-archive** - pkgx package
 *
 * @domain `gnu.org/autoconf/archive`
 *
 * @install `pkgx gnu.org/autoconf-archive`
 * @name `autoconf-archive`
 * @aliases `gnu.org/autoconf-archive`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.gnuorgautoconfarchive
 * // Or access via domain
 * const samePkg = pantry.gnuorgautoconfarchive
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "autoconf-archive"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/autoconf/archive.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgautoconfarchivePackage = {
  /**
   * The display name of this package.
   */
  name: 'autoconf-archive' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/autoconf/archive' as const,
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
  installCommand: 'pkgx gnu.org/autoconf-archive' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'gnu.org/autoconf-archive',
  ] as const,
  fullPath: 'gnu.org/autoconf-archive' as const,
}

export type GnuorgautoconfarchivePackage = typeof gnuorgautoconfarchivePackage
