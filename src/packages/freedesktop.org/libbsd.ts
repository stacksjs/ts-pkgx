/**
 * **libbsd** - BSD compatibility library (mirror)
 *
 * @domain `freedesktop.org/libbsd`
 * @version `0.11.7` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +freedesktop.org/libbsd -- $SHELL -i`
 * @aliases `libbsd`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libbsd
 * // Or access via domain
 * const samePkg = pantry.freedesktoporglibbsd
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "freedesktop.org/libbsd"
 * console.log(pkg.description) // "BSD compatibility library (mirror)"
 * console.log(pkg.versions[0]) // "0.11.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/libbsd.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libbsdPackage = {
  /**
   * The display name of this package.
   */
  name: 'freedesktop.org/libbsd' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/libbsd' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'BSD compatibility library (mirror)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/libbsd/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/libbsd -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.11.7',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libbsd',
  ] as const,
  fullPath: 'freedesktop.org/libbsd' as const,
}

export type LibbsdPackage = typeof libbsdPackage
