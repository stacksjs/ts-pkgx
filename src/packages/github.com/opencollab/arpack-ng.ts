/**
 * **opencollab/arpack-ng** - Collection of Fortran77 subroutines designed to solve large scale eigenvalue problems.
 *
 * @domain `github.com/opencollab/arpack-ng`
 * @version `3.9.1` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/opencollab/arpack-ng -- $SHELL -i`
 * @aliases `opencollab/arpack-ng`
 * @dependencies `eigen.tuxfamily.org@3`, `gnu.org/gcc`, `open-mpi.org@5`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.opencollabarpackng
 * // Or access via domain
 * const samePkg = pantry.githubcomopencollabarpackng
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/opencollab/arpack-ng"
 * console.log(pkg.description) // "Collection of Fortran77 subroutines designed to..."
 * console.log(pkg.versions[0]) // "3.9.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/opencollab/arpack-ng.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const opencollabarpackngPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/opencollab/arpack-ng' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/opencollab/arpack-ng' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Collection of Fortran77 subroutines designed to solve large scale eigenvalue problems.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/opencollab/arpack-ng/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +github.com/opencollab/arpack-ng -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'eigen.tuxfamily.org@3',
    'gnu.org/gcc',
    'open-mpi.org@5',
    'netlib.org/lapack@3',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.9.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'opencollab/arpack-ng',
  ] as const,
  fullPath: 'github.com/opencollab/arpack-ng' as const,
}

export type OpencollabarpackngPackage = typeof opencollabarpackngPackage
