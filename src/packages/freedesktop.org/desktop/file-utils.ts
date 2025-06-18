/**
 * **freedesktop.org/desktop-file-utils** - pkgx package
 *
 * @domain `freedesktop.org/desktop/file-utils`
 *
 * @install `pkgx freedesktop.org/desktop-file-utils`
 * @name `desktop-file-utils`
 * @aliases `freedesktop.org/desktop-file-utils`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.freedesktoporgdesktopfileutils
 * // Or access via domain
 * const samePkg = pantry.freedesktoporgdesktopfileutils
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "desktop-file-utils"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/desktop/file-utils.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgdesktopfileutilsPackage = {
  /**
   * The display name of this package.
   */
  name: 'desktop-file-utils' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/desktop/file-utils' as const,
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
  installCommand: 'pkgx freedesktop.org/desktop-file-utils' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'freedesktop.org/desktop-file-utils',
  ] as const,
  fullPath: 'freedesktop.org/desktop-file-utils' as const,
}

export type FreedesktoporgdesktopfileutilsPackage = typeof freedesktoporgdesktopfileutilsPackage
