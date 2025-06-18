/**
 * **poppler.freedesktop.org/poppler-data** - pkgx package
 *
 * @domain `poppler.freedesktop.org/poppler/data`
 *
 * @install `pkgx poppler.freedesktop.org/poppler-data`
 * @name `poppler-data`
 * @aliases `poppler.freedesktop.org/poppler-data`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.popplerfreedesktoporgpopplerdata
 * // Or access via domain
 * const samePkg = pantry.popplerfreedesktoporgpopplerdata
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "poppler-data"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/poppler-freedesktop-org/poppler/data.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const popplerfreedesktoporgpopplerdataPackage = {
  /**
   * The display name of this package.
   */
  name: 'poppler-data' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'poppler.freedesktop.org/poppler/data' as const,
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
  installCommand: 'pkgx poppler.freedesktop.org/poppler-data' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'poppler.freedesktop.org/poppler-data',
  ] as const,
  fullPath: 'poppler.freedesktop.org/poppler-data' as const,
}

export type PopplerfreedesktoporgpopplerdataPackage = typeof popplerfreedesktoporgpopplerdataPackage
