/**
 * **cgal** - The public CGAL repository, see the README below
 *
 * @domain `cgal.org`
 * @programs `cgal_create_CMakeLists`, `cgal_create_cmake_script`, `cgal_make_macosx_app`
 * @version `6.1.0` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install cgal.org`
 * @homepage https://github.com/CGAL/cgal#readme
 * @dependencies `boost.org`, `eigen.tuxfamily.org`, `gnu.org/gmp`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cgalorg
 * console.log(pkg.name)        // "cgal"
 * console.log(pkg.description) // "The public CGAL repository, see the README below"
 * console.log(pkg.programs)    // ["cgal_create_CMakeLists", "cgal_create_cmake_script", ...]
 * console.log(pkg.versions[0]) // "6.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cgal-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cgalorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'cgal' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cgal.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The public CGAL repository, see the README below' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cgal.org/package.yml' as const,
  homepageUrl: 'https://github.com/CGAL/cgal#readme' as const,
  githubUrl: 'https://github.com/CGAL/cgal' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cgal.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +cgal.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cgal.org' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cgal_create_CMakeLists',
    'cgal_create_cmake_script',
    'cgal_make_macosx_app',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'boost.org',
    'eigen.tuxfamily.org',
    'gnu.org/gmp',
    'gnu.org/mpfr',
    'openssl.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '6.1.0',
    '6.0.2',
    '6.0.1',
    '6.0.0',
    '5.6.2',
    '5.6.1',
    '5.6.0',
  ] as const,
  aliases: [] as const,
}

export type CgalorgPackage = typeof cgalorgPackage
