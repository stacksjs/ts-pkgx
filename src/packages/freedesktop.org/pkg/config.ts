/**
 * **freedesktop.org/pkg-config** - pkgx package
 *
 * @domain `freedesktop.org/pkg/config`
 *
 * @install `pkgx freedesktop.org/pkg-config`
 * @name `pkg-config`
 * @aliases `freedesktop.org/pkg-config`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.freedesktoporgpkgconfig
 * // Or access via domain
 * const samePkg = pantry.freedesktoporgpkgconfig
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pkg-config"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/pkg/config.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgpkgconfigPackage = {
  /**
   * The display name of this package.
   */
  name: 'pkg-config' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/pkg/config' as const,
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
  installCommand: 'pkgx freedesktop.org/pkg-config' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'freedesktop.org/pkg-config',
  ] as const,
  fullPath: 'freedesktop.org/pkg-config' as const,
}

export type FreedesktoporgpkgconfigPackage = typeof freedesktoporgpkgconfigPackage
