/**
 * **pixman** - pkgx package
 *
 * @domain `freedesktop.org/pixman`
 *
 * @install `pkgx freedesktop.org/pixman`
 * @name `pixman`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pixman
 * // Or access via domain
 * const samePkg = pantry.freedesktoporgpixman
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pixman"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/pixman.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pixmanPackage = {
  /**
   * The display name of this package.
   */
  name: 'pixman' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/pixman' as const,
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
  installCommand: 'pkgx freedesktop.org/pixman' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'freedesktop.org/pixman' as const,
}

export type PixmanPackage = typeof pixmanPackage
