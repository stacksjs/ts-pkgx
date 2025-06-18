/**
 * **freedesktop.org/at-spi2-atk** - pkgx package
 *
 * @domain `freedesktop.org/at/spi2-atk`
 *
 * @install `pkgx freedesktop.org/at-spi2-atk`
 * @name `at-spi2-atk`
 * @aliases `freedesktop.org/at-spi2-atk`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.freedesktoporgatspi2atk
 * // Or access via domain
 * const samePkg = pantry.freedesktoporgatspi2atk
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "at-spi2-atk"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/at/spi2-atk.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgatspi2atkPackage = {
  /**
   * The display name of this package.
   */
  name: 'at-spi2-atk' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/at/spi2-atk' as const,
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
  installCommand: 'pkgx freedesktop.org/at-spi2-atk' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'freedesktop.org/at-spi2-atk',
  ] as const,
  fullPath: 'freedesktop.org/at-spi2-atk' as const,
}

export type Freedesktoporgatspi2atkPackage = typeof freedesktoporgatspi2atkPackage
