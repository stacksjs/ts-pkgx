/**
 * **man-db** - pkgx package
 *
 * @domain `man-db.gitlab.io/man-db`
 * @programs `apropos`, `catman`, `lexgrog`, `man`, `mandb`, ... (+3 more)
 * @version `2.13.1` (5 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/man-db-gitlab-io/man-db.md
 *
 * @install `sh <(curl https://pkgx.sh) +man-db.gitlab.io/man-db -- $SHELL -i`
 * @name `man-db`
 * @dependencies `libpipeline.gitlab.io/libpipeline`, `gnu.org/groff`, `linuxgnu.org/gdbm`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mandb
 * // Or access via domain
 * const samePkg = pantry.mandbgitlabiomandb
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "man-db"
 * console.log(pkg.programs)    // ["apropos", "catman", ...]
 * console.log(pkg.versions[0]) // "2.13.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/man-db-gitlab-io/man-db.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mandbPackage = {
  /**
   * The display name of this package.
   */
  name: 'man-db' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'man-db.gitlab.io/man-db' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/man-db.gitlab.io/man-db/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +man-db.gitlab.io/man-db -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'apropos',
    'catman',
    'lexgrog',
    'man',
    'mandb',
    'manpath',
    'man-recode',
    'whatis',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libpipeline.gitlab.io/libpipeline',
    'gnu.org/groff',
    'linuxgnu.org/gdbm',
    'gnu.org/gdbm',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.13.1',
    '2.13.0',
    '2.12.1',
    '2.12.0',
    '2.11.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'man-db.gitlab.io/man-db' as const,
}

export type MandbPackage = typeof mandbPackage
