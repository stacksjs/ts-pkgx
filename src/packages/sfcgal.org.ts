/**
 * **sfcgal-config** - C++ wrapper library around CGAL
 *
 * @domain `sfcgal.org`
 * @programs `sfcgal-config`
 * @version `2.1.0` (6 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/sfcgal-org.md
 *
 * @install `sh <(curl https://pkgx.sh) sfcgal-config`
 * @name `sfcgal-config`
 * @dependencies `boost.org`, `cgal.org`, `gnu.org/gmp`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.sfcgalconfig
 * // Or access via domain
 * const samePkg = pantry.sfcgalorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sfcgal-config"
 * console.log(pkg.description) // "C++ wrapper library around CGAL"
 * console.log(pkg.programs)    // ["sfcgal-config"]
 * console.log(pkg.versions[0]) // "2.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sfcgal-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sfcgalconfigPackage = {
  /**
   * The display name of this package.
   */
  name: 'sfcgal-config' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sfcgal.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'C++ wrapper library around CGAL' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sfcgal.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) sfcgal-config' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'sfcgal-config',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'boost.org',
    'cgal.org',
    'gnu.org/gmp',
    'gnu.org/mpfr',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.1.0',
    '2.0.0',
    '1.5.2',
    '1.5.1',
    '1.5.0',
    '1.4.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'sfcgal.org' as const,
}

export type SfcgalconfigPackage = typeof sfcgalconfigPackage
