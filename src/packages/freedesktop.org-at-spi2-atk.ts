/**
 * **at-spi2-atk** - pkgx package
 *
 * @domain `freedesktop.org/at-spi2-atk`
 * @version `2.38.0` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/at-spi2-atk.md
 *
 * @install `sh <(curl https://pkgx.sh) +freedesktop.org/at-spi2-atk -- $SHELL -i`
 * @aliases `at-spi2-atk`
 * @dependencies `gnome.org/atk`, `gnome.org/libxml2`, `freedesktop.org/dbus`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.atspi2atk
 * // Or access via domain
 * const samePkg = pantry.freedesktoporgatspi2atk
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "freedesktop.org/at-spi2-atk"
 * console.log(pkg.versions[0]) // "2.38.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/at-spi2-atk.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const atspi2atkPackage = {
  /**
   * The display name of this package.
   */
  name: 'freedesktop.org/at-spi2-atk' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/at-spi2-atk' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/at-spi2-atk/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/at-spi2-atk -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/atk',
    'gnome.org/libxml2',
    'freedesktop.org/dbus',
    'x.org/xtst',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.38.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'at-spi2-atk',
  ] as const,
  fullPath: 'freedesktop.org/at-spi2-atk' as const,
}

export type Atspi2atkPackage = typeof atspi2atkPackage
