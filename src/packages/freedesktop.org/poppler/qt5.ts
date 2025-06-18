/**
 * **freedesktop.org/poppler-qt5** - pkgx package
 *
 * @domain `freedesktop.org/poppler/qt5`
 *
 * @install `pkgx freedesktop.org/poppler-qt5`
 * @name `poppler-qt5`
 * @aliases `freedesktop.org/poppler-qt5`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.freedesktoporgpopplerqt5
 * // Or access via domain
 * const samePkg = pantry.freedesktoporgpopplerqt5
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "poppler-qt5"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/poppler/qt5.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgpopplerqt5Package = {
  /**
   * The display name of this package.
   */
  name: 'poppler-qt5' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/poppler/qt5' as const,
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
  installCommand: 'pkgx freedesktop.org/poppler-qt5' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'freedesktop.org/poppler-qt5',
  ] as const,
  fullPath: 'freedesktop.org/poppler-qt5' as const,
}

export type Freedesktoporgpopplerqt5Package = typeof freedesktoporgpopplerqt5Package
