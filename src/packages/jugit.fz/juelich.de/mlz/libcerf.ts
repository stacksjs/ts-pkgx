/**
 * **jugit.fz-juelich.de/mlz/libcerf** - pkgx package
 *
 * @domain `jugit.fz/juelich.de/mlz/libcerf`
 *
 * @install `pkgx jugit.fz-juelich.de/mlz/libcerf`
 * @aliases `jugit.fz-juelich.de/mlz/libcerf`, `mlz/libcerf`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.jugitfzjuelichdemlzlibcerf
 * // Or access via domain
 * const samePkg = pantry.jugitfzjuelichdemlzlibcerf
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mlz"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jugit-fz/juelich-de/mlz/libcerf.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jugitfzjuelichdemlzlibcerfPackage = {
  /**
   * The display name of this package.
   */
  name: 'mlz' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jugit.fz/juelich.de/mlz/libcerf' as const,
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
  installCommand: 'pkgx jugit.fz-juelich.de/mlz/libcerf' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'jugit.fz-juelich.de/mlz/libcerf',
    'mlz/libcerf',
  ] as const,
  fullPath: 'jugit.fz-juelich.de/mlz/libcerf' as const,
}

export type JugitfzjuelichdemlzlibcerfPackage = typeof jugitfzjuelichdemlzlibcerfPackage
