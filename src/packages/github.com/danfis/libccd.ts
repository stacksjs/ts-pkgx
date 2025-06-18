/**
 * **danfis/libccd** - Library for collision detection between two convex shapes
 *
 * @domain `github.com/danfis/libccd`
 * @version `2.1.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/danfis/libccd -- $SHELL -i`
 * @aliases `danfis/libccd`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.danfislibccd
 * // Or access via domain
 * const samePkg = pantry.githubcomdanfislibccd
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/danfis/libccd"
 * console.log(pkg.description) // "Library for collision detection between two con..."
 * console.log(pkg.versions[0]) // "2.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/danfis/libccd.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const danfislibccdPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/danfis/libccd' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/danfis/libccd' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Library for collision detection between two convex shapes' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/danfis/libccd/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/danfis/libccd -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'danfis/libccd',
  ] as const,
  fullPath: 'github.com/danfis/libccd' as const,
}

export type DanfislibccdPackage = typeof danfislibccdPackage
