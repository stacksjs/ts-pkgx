/**
 * **suitesparse** - Package from pantry: people.engr.tamu.edu/davis/suitesparse
 *
 * @domain `people.engr.tamu.edu/davis/suitesparse`
 *
 * @install `launchpad install people.engr.tamu.edu/davis/suitesparse`
 * @dependencies `glaros.dtc.umn.edu/metis`, `gnu.org/m4`, `netlib.org/lapack`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.peopleengrtamuedudavissuitesparse
 * console.log(pkg.name)        // "suitesparse"
 * console.log(pkg.description) // "Package from pantry: people.engr.tamu.edu/davis..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/people-engr-tamu-edu/davis/suitesparse.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const peopleengrtamuedudavissuitesparsePackage = {
  /**
   * The display name of this package.
   */
  name: 'suitesparse' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'people.engr.tamu.edu/davis/suitesparse' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: people.engr.tamu.edu/davis/suitesparse' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install people.engr.tamu.edu/davis/suitesparse' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +people.engr.tamu.edu/davis/suitesparse -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install people.engr.tamu.edu/davis/suitesparse' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'glaros.dtc.umn.edu/metis',
    'gnu.org/m4',
    'netlib.org/lapack',
    'gnu.org/gmp',
    'openmp.llvm.org',
    'gnu.org/mpfr',
    'gnu.org/gcc',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/people.engr.tamu.edu/davis/suitesparse/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PeopleengrtamuedudavissuitesparsePackage = typeof peopleengrtamuedudavissuitesparsePackage
