/**
 * **freedesktop.org/xdg-user-dirs** - pkgx package
 *
 * @domain `freedesktop.org/xdg/user-dirs`
 *
 * @install `pkgx freedesktop.org/xdg-user-dirs`
 * @name `xdg-user-dirs`
 * @aliases `freedesktop.org/xdg-user-dirs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.freedesktoporgxdguserdirs
 * // Or access via domain
 * const samePkg = pantry.freedesktoporgxdguserdirs
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xdg-user-dirs"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/xdg/user-dirs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgxdguserdirsPackage = {
  /**
   * The display name of this package.
   */
  name: 'xdg-user-dirs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/xdg/user-dirs' as const,
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
  installCommand: 'pkgx freedesktop.org/xdg-user-dirs' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'freedesktop.org/xdg-user-dirs',
  ] as const,
  fullPath: 'freedesktop.org/xdg-user-dirs' as const,
}

export type FreedesktoporgxdguserdirsPackage = typeof freedesktoporgxdguserdirsPackage
