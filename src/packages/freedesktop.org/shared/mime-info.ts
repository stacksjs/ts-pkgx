/**
 * **freedesktop.org/shared-mime-info** - pkgx package
 *
 * @domain `freedesktop.org/shared/mime-info`
 *
 * @install `pkgx freedesktop.org/shared-mime-info`
 * @name `shared-mime-info`
 * @aliases `freedesktop.org/shared-mime-info`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.freedesktoporgsharedmimeinfo
 * // Or access via domain
 * const samePkg = pantry.freedesktoporgsharedmimeinfo
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "shared-mime-info"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/shared/mime-info.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgsharedmimeinfoPackage = {
  /**
   * The display name of this package.
   */
  name: 'shared-mime-info' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/shared/mime-info' as const,
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
  installCommand: 'pkgx freedesktop.org/shared-mime-info' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'freedesktop.org/shared-mime-info',
  ] as const,
  fullPath: 'freedesktop.org/shared-mime-info' as const,
}

export type FreedesktoporgsharedmimeinfoPackage = typeof freedesktoporgsharedmimeinfoPackage
