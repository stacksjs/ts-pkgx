/**
 * **findutils** - pkgx package
 *
 * @domain `gnu.org/findutils`
 * @programs `find`, `locate`, `updatedb`, `xargs`
 * @version `4.10.0` (2 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/findutils.md
 *
 * @install `sh <(curl https://pkgx.sh) +gnu.org/findutils -- $SHELL -i`
 * @aliases `findutils`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.findutils
 * // Or access via domain
 * const samePkg = pantry.gnuorgfindutils
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gnu.org/findutils"
 * console.log(pkg.programs)    // ["find", "locate", ...]
 * console.log(pkg.versions[0]) // "4.10.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/findutils.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const findutilsPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnu.org/findutils' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/findutils' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from gnu.org/findutils' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/findutils/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnu.org/findutils -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'find',
    'locate',
    'updatedb',
    'xargs',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.10.0',
    '4.9.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'findutils',
  ] as const,
  fullPath: 'gnu.org/findutils' as const,
}

export type FindutilsPackage = typeof findutilsPackage
