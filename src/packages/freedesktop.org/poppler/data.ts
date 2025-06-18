/**
 * **freedesktop.org/poppler-data** - pkgx package
 *
 * @domain `freedesktop.org/poppler/data`
 *
 * @install `pkgx freedesktop.org/poppler-data`
 * @name `poppler-data`
 * @aliases `freedesktop.org/poppler-data`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.freedesktoporgpopplerdata
 * // Or access via domain
 * const samePkg = pantry.freedesktoporgpopplerdata
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "poppler-data"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/poppler/data.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgpopplerdataPackage = {
  /**
   * The display name of this package.
   */
  name: 'poppler-data' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/poppler/data' as const,
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
  installCommand: 'pkgx freedesktop.org/poppler-data' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'freedesktop.org/poppler-data',
  ] as const,
  fullPath: 'freedesktop.org/poppler-data' as const,
}

export type FreedesktoporgpopplerdataPackage = typeof freedesktoporgpopplerdataPackage
