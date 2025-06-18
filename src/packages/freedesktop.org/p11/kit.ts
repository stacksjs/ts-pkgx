/**
 * **freedesktop.org/p11-kit** - pkgx package
 *
 * @domain `freedesktop.org/p11/kit`
 *
 * @install `pkgx freedesktop.org/p11-kit`
 * @name `p11-kit`
 * @aliases `freedesktop.org/p11-kit`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.freedesktoporgp11kit
 * // Or access via domain
 * const samePkg = pantry.freedesktoporgp11kit
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "p11-kit"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/p11/kit.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgp11kitPackage = {
  /**
   * The display name of this package.
   */
  name: 'p11-kit' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/p11/kit' as const,
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
  installCommand: 'pkgx freedesktop.org/p11-kit' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'freedesktop.org/p11-kit',
  ] as const,
  fullPath: 'freedesktop.org/p11-kit' as const,
}

export type Freedesktoporgp11kitPackage = typeof freedesktoporgp11kitPackage
