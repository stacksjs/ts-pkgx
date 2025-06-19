/**
 * **ceres-solver.org** - pkgx package
 *
 * @domain `ceres-solver.org`
 * @version `2.2.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +ceres-solver.org -- $SHELL -i`
 * @dependencies `eigen.tuxfamily.org`, `gflags.github.io`, `google.com/glog`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ceressolverorg
 * console.log(pkg.name)        // "ceres-solver.org"
 * console.log(pkg.versions[0]) // "2.2.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ceres-solver-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ceressolverorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'ceres-solver.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ceres-solver.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ceres-solver.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +ceres-solver.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'eigen.tuxfamily.org',
    'gflags.github.io',
    'google.com/glog',
    'glaros.dtc.umn.edu/metis',
    'netlib.org/lapack',
    'people.engr.tamu.edu/davis/suitesparse',
    'github.com/oneapi-src/oneTBB',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.2.0',
    '2.1.0',
  ] as const,
  aliases: [] as const,
}

export type CeressolverorgPackage = typeof ceressolverorgPackage
