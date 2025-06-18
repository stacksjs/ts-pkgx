/**
 * **metis** - Programs that partition graphs and order matrices
 *
 * @domain `glaros.dtc.umn.edu/metis`
 * @programs `cmpfillin`, `gpmetis`, `graphchk`, `m2gmetis`, `mpmetis`, ... (+1 more)
 * @version `5.2.1.1` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +glaros.dtc.umn.edu/metis -- $SHELL -i`
 * @name `metis`
 * @dependencies `gnu.org/make`, `cmake.org`, `git-scm.org`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.metis
 * // Or access via domain
 * const samePkg = pantry.glarosdtcumnedumetis
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "metis"
 * console.log(pkg.description) // "Programs that partition graphs and order matrices"
 * console.log(pkg.programs)    // ["cmpfillin", "gpmetis", ...]
 * console.log(pkg.versions[0]) // "5.2.1.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/glaros-dtc-umn-edu/metis.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const metisPackage = {
  /**
   * The display name of this package.
   */
  name: 'metis' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'glaros.dtc.umn.edu/metis' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Programs that partition graphs and order matrices' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/glaros.dtc.umn.edu/metis/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +glaros.dtc.umn.edu/metis -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cmpfillin',
    'gpmetis',
    'graphchk',
    'm2gmetis',
    'mpmetis',
    'ndmetis',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/make',
    'cmake.org',
    'git-scm.org',
    'curl.se',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.2.1.1',
    '5.1.0.4',
    '5.1.0.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type MetisPackage = typeof metisPackage
